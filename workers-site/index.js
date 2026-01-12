import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    // 404 处理
    try {
      let notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404.html`, req),
      });
      return new Response(notFoundResponse.body, {
        ...notFoundResponse,
        status: 404,
      });
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  }
}
