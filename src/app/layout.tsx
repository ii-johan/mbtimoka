// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // 전역 스타일 불러오기 (기존 파일)

const inter = Inter({ subsets: ['latin'] });

// 🔴 웹사이트의 메타데이터를 정의합니다.
// 브라우저 탭 제목과 검색 엔진 설명을 여기에 설정해요.
export const metadata: Metadata = {
  title: 'MBTI MOKA', // 이제 브라우저 탭에 이 제목이 표시됩니다.
  description: '나의 MBTI와 MOKA 성격 유형을 알아보는 심층 검사', // 검색 엔진에 표시될 설명 (선택 사항)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML 문서의 기본 언어를 한국어(ko)로 설정합니다.
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}