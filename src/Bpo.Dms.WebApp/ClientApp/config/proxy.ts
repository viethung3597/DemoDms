// const contexts = [
//   '/api',
//   "/identity"
// ];

// export default {
//   dev: contexts.reduce((obj, item) => ({
//     ...obj,
//     [item]: {
//       target: `https://localhost:7108`,
//       changeOrigin: true,
//       secure: false
//     },
//   }), {}),
//   test: {
//     '/api/': {
//       target: 'https://bpodms.azurewebsites.net',
//       changeOrigin: true,
//       pathRewrite: { '^': '' },
//     },
//   },
//   pre: {
//     '/api/': {
//       target: 'https://bpodms.azurewebsites.net',
//       changeOrigin: true,
//       pathRewrite: { '^': '' },
//     },
//   },
// };
