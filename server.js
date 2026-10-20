import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'dist')));

// 所有路由都返回index.html，让Vue Router处理
app.get(/\/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = app.listen(PORT, () => {
  console.log(`🚀 校园服务平台服务器已启动！`);
  console.log(`📡 访问地址: http://localhost:${PORT}`);
  console.log(`🎓 准备好为同学们服务了！`);
});

// 优雅关闭
process.on('SIGTERM', () => {
  console.log('SIGTERM 信号接收，正在关闭服务器...');
  server.close(() => {
    console.log('服务器已关闭');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT 信号接收，正在关闭服务器...');
  server.close(() => {
    console.log('服务器已关闭');
    process.exit(0);
  });
});

// 保持进程活跃
server.setTimeout(0);
