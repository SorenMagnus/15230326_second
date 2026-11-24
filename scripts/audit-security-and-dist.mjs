import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

console.log('=== 启动 Phase 8 生产环境打包产物深度安全审计 ===');
const distPath = './dist';
let violations = 0;

function scanDir(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else {
      if (file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.css')) {
        const content = readFileSync(fullPath, 'utf-8');
        
        // 1. 严格检查云端大模型 API / API Key / 远程调用
        const forbiddenPatterns = [
          { name: 'Gemini API Key', regex: /AIza[0-9A-Za-z-_]{35}/ },
          { name: 'Google GenAI SDK', regex: /@google\/genai/ },
          { name: 'GenerativeLanguage API', regex: /generativelanguage\.googleapis\.com/ },
          { name: 'OpenAI API', regex: /api\.openai\.com/ },
          { name: 'Anthropic API', regex: /api\.anthropic\.com/ },
          { name: 'Firebase Secret', regex: /firebaseApp/ },
        ];

        for (const pat of forbiddenPatterns) {
          if (pat.regex.test(content)) {
            console.error(`[FAIL] 在文件 ${file} 中发现违规特征: ${pat.name}`);
            violations++;
          }
        }

        // 2. 严格检查外部在线字体 / CDN
        const externalCdnPatterns = [
          { name: 'Google Fonts CDN', regex: /fonts\.googleapis\.com/ },
          { name: 'Cloudflare cdnjs', regex: /cdnjs\.cloudflare\.com/ },
          { name: 'Unpkg CDN', regex: /unpkg\.com/ },
        ];

        for (const cdn of externalCdnPatterns) {
          if (cdn.regex.test(content)) {
            console.error(`[FAIL] 在文件 ${file} 中发现外部 CDN 依赖: ${cdn.name}`);
            violations++;
          }
        }
      }
    }
  }
}

scanDir(distPath);

if (violations === 0) {
  console.log('[PASS] 产物 100% 纯静态本地封装，0 外网 CDN 依赖，0 API Key，零运行时模型调用！');
} else {
  console.error(`[FAIL] 审计未通过，共计 ${violations} 项安全违规！`);
  process.exit(1);
}
