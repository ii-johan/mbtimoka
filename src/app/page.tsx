// src/app/page.tsx
// (이 파일이 Next.js App Router의 기본 시작 페이지입니다.)

'use client'; // 클라이언트 컴포넌트로 지정 (useState, useEffect, useNavigate 등 클라이언트 기능 사용 시 필요)

import React from 'react';
import { useRouter } from 'next/navigation'; // Next.js 13+ App Router에서 사용되는 라우터 훅

export default function HomePage() {
  const router = useRouter();

  const startTest = () => {
    // '/test' 경로로 이동하여 80문항 테스트를 시작합니다.
    router.push('/test');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // 전체 화면 높이 사용
      backgroundColor: '#000000', // 검은색 배경
      color: '#ffffff', // 기본 글씨색 흰색
      fontFamily: 'Pretendard, Arial, sans-serif', // Pretenard 폰트 우선 (설치되어 있다면)
      textAlign: 'center',
      padding: '20px',
      overflow: 'hidden', // 넘치는 요소 숨김 (애니메이션 등)
      position: 'relative', // 배경 효과를 위한 position 설정
    }}>
      {/* 배경의 빛나는 효과 (추가적인 CSS로 더 정교하게 만들 수 있음) */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: 'rgba(50, 200, 255, 0.1)', // 은은한 푸른빛
        filter: 'blur(100px)',
        top: '10%',
        left: '10%',
        animation: 'moveLight1 15s infinite alternate',
        zIndex: 0,
      }}></div>
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 100, 200, 0.1)', // 은은한 붉은빛
        filter: 'blur(120px)',
        bottom: '15%',
        right: '15%',
        animation: 'moveLight2 18s infinite alternate',
        zIndex: 0,
      }}></div>

      {/* 상단 문장: 심층 성격 분석 */}
      <p style={{
        fontSize: '1.2em',
        color: '#aaaaaa',
        marginBottom: '4px',
        opacity: 0, // 초기에는 숨김
        animation: 'fadeIn 1s forwards 0.5s', // 0.5초 후 나타남
        zIndex: 1, // 위에 표시
      }}>
        깊이 있는 자기 탐구의 시작
      </p>

      {/* MBTI MOKA 로고 (빛나는 효과) */}
      <h1 style={{
        fontSize: '6em', // 글씨 크기
        fontWeight: '900', // 더 두껍게
        marginBottom: '60px',
        background: 'linear-gradient(45deg,rgb(113, 245, 186),rgb(43, 173, 60), #aaff00)', // 라임색 그라데이션
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-2px', // 글자 간격 조절
        textShadow: '0 0 10px rgba(0,255,0,0.5), 0 0 20px rgba(0,255,0,0.3)', // 빛나는 효과
        opacity: 0, // 초기에는 숨김
        animation: 'fadeIn 1s forwards 1s', // 1초 후 나타남
        zIndex: 1,
      }}>
        MBTI MOKA
      </h1>

      {/* 설명 문구 */}
      <p style={{
        fontSize: '1.2em',
        color: '#dddddd',
        lineHeight: '1.6',
        maxWidth: '700px',
        marginBottom: '70px',
        opacity: 0, // 초기에는 숨김
        animation: 'fadeIn 1s forwards 1.5s', // 1.5초 후 나타남
        zIndex: 1,
      }}>
        MBTI와 MOKA 스타일을 동시에 탐색하는 성격 검사.<br />
        이를 통해 당신의 잠재된 성향과 특징을 발견하세요.
      </p>

      {/* 'Test Start (80문항)' 버튼 */}
      <button
        onClick={startTest}
        style={{
          padding: '20px 50px',
          fontSize: '1.4em',
          fontWeight: 'bold',
          color: '#ffffff', // 버튼 글씨색 흰색
          background: 'linear-gradient(45deg, #1abc9c, #16a085, #2ecc71)', // 예쁜 초록색 그라데이션
          border: 'none',
          borderRadius: '20px', // 더 둥글게
          cursor: 'pointer',
          boxShadow: '0 8px 15px rgba(0,255,0,0.4)', // 초록색 그림자
          transition: 'all 0.4s ease',
          animation: 'scaleIn 0.8s forwards 2s', // 2초 후 확대되면서 나타남
          zIndex: 1,
        }}
        // 호버 효과
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 12px 20px rgba(0,255,0,0.6)';
          e.currentTarget.style.background = 'linear-gradient(45deg, #16a085, #1abc9c, #2ecc71)'; // 호버 시 그라데이션 변경
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,255,0,0.4)';
          e.currentTarget.style.background = 'linear-gradient(45deg, #1abc9c, #16a085, #2ecc71)';
        }}
      >
        Test Start (80문항)
      </button>

      {/* CSS Keyframes for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes moveLight1 {
          0% { transform: translate(0, 0); }
          25% { transform: translate(50px, -30px); }
          50% { transform: translate(0, 50px); }
          75% { transform: translate(-40px, -20px); }
          100% { transform: translate(0, 0); }
        }

        @keyframes moveLight2 {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-30px, 40px); }
          50% { transform: translate(50px, 0); }
          75% { transform: translate(-10px, -60px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
}