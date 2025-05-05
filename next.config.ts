import type { NextConfig } from 'next';
import remarkGfm from 'remark-gfm';
//공식문서 참조
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   typedRoutes: true,
  // },
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx', 'md'],
};

//next js 설정과 병합
const withMDX = createMDX({
  //필요한 마크다운 플러그인 추가
  options: {
    remarkPlugins: [['remark-gfm']], //turbopack 실행시
    // remarkPlugins: [remarkGfm], // webpack실행시
    // @ts-expect-error remark-gfm 타입 충돌 문제 해결
    // rehypePlugins: [['rehype-katex', { strict: true, throwOnError: true }]],
  },
});

export default withMDX(nextConfig);
