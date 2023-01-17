import { loader$, RequestHandler } from '@builder.io/qwik-city';

export const rootLoader = loader$(() => {
  return {
    serverTime: new Date().toISOString(),
    nodeVersion: process.version,
  };
});

export const onRequest: RequestHandler = ({ headers, url, json }) => {
  headers.set('X-Qwik', 'handled');
  console.log(`🚩🚩🚩: `,url.pathname)
  if (url.pathname === '/qwikcity-test/virtual/auth') {
    throw json(200, {
      message: 'handled',
    });
  }
};