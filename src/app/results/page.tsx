// src/app/results/page.tsx

'use client';

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { questionsData as allQuestions } from '@/data/questionsData';

// MBTI 지표 정의
const mbtiDimensions = [
  { name: 'E', opposite: 'I', group: 'E/I', description: '에너지의 방향: 외향형(E) vs 내향형(I)' },
  { name: 'S', opposite: 'N', group: 'S/N', description: '인식 기능: 감각형(S) vs 직관형(N)' },
  { name: 'T', opposite: 'F', group: 'T/F', description: '판단 기능: 사고형(T) vs 감정형(F)' },
  { name: 'J', opposite: 'P', group: 'J/P', description: '생활 양식: 판단형(J) vs 인식형(P)' },
];

// 🔴 MOKA 지표 정의 (새로운 지표들 반영)
const mokaDimensions = [
  { name: 'M', opposite: 'B', group: 'M/B', description: '주도성: 주도형(M) vs 순응형(B)' },
  { name: 'O', opposite: 'U', group: 'O/U', description: '관계 방식: 포용형(O) vs 공격형(U)' },
  { name: 'K', opposite: 'R', group: 'K/R', description: '표현 방식: 표현형(K) vs 주저형(R)' },
  { name: 'A', opposite: 'Y', group: 'A/Y', description: '스타일: 세련형(A) vs 촌티형(Y)' },
];

const ResultsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    const encodedScores = searchParams.get('scores');
    if (encodedScores) {
      const decodedScores = encodedScores.split(',').map(Number);
      setScores(decodedScores);
    }
  }, [searchParams]);

  // 점수를 기반으로 MBTI 및 MOKA 지표 계산
  const calculateResults = useCallback((allScores: number[]) => {
    if (allScores.length === 0 || allQuestions.length === 0) return { mbti: '----', moka: '----', mbtiPercentages: {}, mokaPercentages: {} };

    const dimensionScores: { [key: string]: number } = {}; // 각 지표(E, I, S, N 등)의 총점
    const dimensionMaxPossibleScores: { [key: string]: number } = {}; // 각 지표의 최대 가능 점수 (해당 지표에 대한 질문 수 * 7점)

    // 모든 지표 점수 및 최대 가능 점수 초기화
    [...mbtiDimensions, ...mokaDimensions].forEach(dim => {
      dimensionScores[dim.name] = 0;
      dimensionScores[dim.opposite] = 0;
      dimensionMaxPossibleScores[dim.name] = 0;
      dimensionMaxPossibleScores[dim.opposite] = 0;
    });

    allScores.forEach((score, index) => {
      const question = allQuestions[index]; // 답변 순서와 질문 순서가 일치한다고 가정
      if (!question) return; // 질문이 없으면 건너뜀

      const { dimension, polarity } = question;

      const currentDim = [...mbtiDimensions, ...mokaDimensions].find(d => d.group === dimension);

      if (currentDim) {
        if (polarity === currentDim.name) { // 질문의 극성이 해당 지표의 'name' 쪽일 때 (예: dimension='E/I', polarity='E')
          dimensionScores[currentDim.name] += score;
          // 반대쪽 지표의 점수는 (7점 + 1점) - 현재 점수 = 8 - score 로 계산
          // 예: E 질문에 7점(Yes++)이면 I에 1점 기여, E 질문에 1점(No++)이면 I에 7점 기여
          dimensionScores[currentDim.opposite] += (8 - score);
        } else if (polarity === currentDim.opposite) { // 질문의 극성이 해당 지표의 'opposite' 쪽일 때 (예: dimension='E/I', polarity='I')
          dimensionScores[currentDim.opposite] += score;
          dimensionScores[currentDim.name] += (8 - score);
        }
        // 각 극성의 최대 가능 점수 누적 (질문당 7점 만점)
        dimensionMaxPossibleScores[currentDim.name] += 7;
        dimensionMaxPossibleScores[currentDim.opposite] += 7;
      }
    });

    let mbti = '';
    const mbtiPercentages: { [key: string]: number } = {};
    mbtiDimensions.forEach(dim => {
      const { name, opposite } = dim;
      const nameTotalScore = dimensionScores[name] || 0;
      const oppositeTotalScore = dimensionScores[opposite] || 0;
      const totalPossibleScore = dimensionMaxPossibleScores[name] || 0; // 해당 지표에 대한 총 질문 개수 * 7점

      if (totalPossibleScore > 0) {
        // 실제 얻은 점수 합계를 전체 합산 점수의 합계로 나눈 비율
        const totalDimensionScore = nameTotalScore + oppositeTotalScore;
        
        let namePercent = 0;
        let oppositePercent = 0;

        if (totalDimensionScore > 0) {
            namePercent = Math.round((nameTotalScore / totalDimensionScore) * 100);
            oppositePercent = 100 - namePercent; // 반올림 오차 보정
        }
        
        mbtiPercentages[name] = namePercent;
        mbtiPercentages[opposite] = oppositePercent;

        mbti += (nameTotalScore >= oppositeTotalScore) ? name : opposite;
      } else {
        mbti += '-';
        mbtiPercentages[name] = 0;
        mbtiPercentages[opposite] = 0;
      }
    });

    let moka = '';
    const mokaPercentages: { [key: string]: number } = {};
    mokaDimensions.forEach(dim => {
      const { name, opposite } = dim;
      const nameTotalScore = dimensionScores[name] || 0;
      const oppositeTotalScore = dimensionScores[opposite] || 0;
      const totalPossibleScore = dimensionMaxPossibleScores[name] || 0;

      if (totalPossibleScore > 0) {
        const totalDimensionScore = nameTotalScore + oppositeTotalScore;
        
        let namePercent = 0;
        let oppositePercent = 0;

        if (totalDimensionScore > 0) {
            namePercent = Math.round((nameTotalScore / totalDimensionScore) * 100);
            oppositePercent = 100 - namePercent; // 반올림 오차 보정
        }

        mokaPercentages[name] = namePercent;
        mokaPercentages[opposite] = oppositePercent;
        moka += (nameTotalScore >= oppositeTotalScore) ? name : opposite;
      } else {
        moka += '-';
        mokaPercentages[name] = 0;
        mokaPercentages[opposite] = 0;
      }
    });

    return { mbti, moka, mbtiPercentages, mokaPercentages };
  }, []);

  const { mbti, moka, mbtiPercentages, mokaPercentages } = useMemo(() => calculateResults(scores), [scores, calculateResults]);


  // 결과 유형에 따른 간략한 설명 (예시)
  const getResultDescription = (mbtiType: string, mokaType: string) => {
    // 🔴 'let'을 'const'로 변경
    const description: string[] = [];

    // MBTI 설명
    if (mbtiType.includes('E')) description.push("활동적이고 사교적이며 외부 활동에서 에너지를 얻는 경향이 있습니다.");
    if (mbtiType.includes('I')) description.push("차분하고 사려 깊으며 내면의 세계를 중시하는 경향이 있습니다.");
    if (mbtiType.includes('S')) description.push("현실적이고 실제적인 경험을 중시하며 세부 사항에 강합니다.");
    if (mbtiType.includes('N')) description.push("미래 지향적이고 추상적인 개념에 관심이 많습니다.");
    if (mbtiType.includes('T')) description.push("논리적이고 분석적이며 객관적인 판단을 선호합니다.");
    if (mbtiType.includes('F')) description.push("조화와 사람들의 감정을 중요하게 생각하며 따뜻하고 인정이 많습니다.");
    if (mbtiType.includes('J')) description.push("계획적이고 체계적이며 정리정돈을 잘합니다.");
    if (mbtiType.includes('P')) description.push("유연하고 자율적이며 변화에 잘 적응하는 편입니다.");
    
    // 🔴 MOKA 설명 (새로운 지표들 반영)
    if (mokaType.includes('M')) description.push("매사에 적극적이고 주도적으로 행동하며 목표 달성을 위해 앞장서는 **주도형**입니다.");
    if (mokaType.includes('B')) description.push("타인의 의견을 경청하고 조화롭게 협력하며 안정적인 관계를 추구하는 **순응형**입니다.");
    if (mokaType.includes('O')) description.push("새로운 아이디어와 다양한 관점을 열린 마음으로 받아들이며 포용하는 **포용형**입니다.");
    if (mokaType.includes('U')) description.push("직설적이고 단호하게 자신의 의견을 피력하며 논리적으로 문제를 해결하려는 **공격형**입니다.");
    if (mokaType.includes('K')) description.push("자신의 생각과 감정을 명확하고 솔직하게 표현하며 타인과의 소통을 중요시하는 **표현형**입니다.");
    if (mokaType.includes('R')) description.push("자신의 감정이나 의견을 쉽게 드러내지 않으며 신중하고 조심스럽게 행동하는 **주저형**입니다.");
    if (mokaType.includes('A')) description.push("트렌드에 민감하고 세련된 감각을 지녔으며 깔끔하고 단정한 것을 선호하는 **세련형**입니다.");
    if (mokaType.includes('Y')) description.push("형식에 얽매이지 않고 편안하며 자신만의 개성을 자연스럽게 드러내는 **촌티형**입니다.");


    if (description.length === 0) return "당신은 고유한 매력을 가진 분입니다.";
    return description.join(' '); // 여러 설명을 합쳐서 반환
  };


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: 'Pretendard, Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* 배경의 빛나는 효과 (초기화면과 동일) */}
      <div style={{
        position: 'absolute',
        width: '300px', height: '300px', borderRadius: '50%',
        backgroundColor: 'rgba(50, 200, 255, 0.1)', filter: 'blur(100px)',
        top: '10%', left: '10%', animation: 'moveLight1 15s infinite alternate', zIndex: 0,
      }}></div>
      <div style={{
        position: 'absolute',
        width: '400px', height: '400px', borderRadius: '50%',
        backgroundColor: 'rgba(255, 100, 200, 0.1)', filter: 'blur(120px)',
        bottom: '15%', right: '15%', animation: 'moveLight2 18s infinite alternate', zIndex: 0,
      }}></div>

      <h1 style={{
        fontSize: '3.5em',
        fontWeight: 'bold',
        color: '#aaff00', // 라임색
        textShadow: '0 0 10px rgba(170,255,0,0.7)',
        marginBottom: '20px',
        zIndex: 1,
      }}>
        당신의 성격 유형은?
      </h1>

      {scores.length === 0 ? (
        <p style={{ fontSize: '1.5em', color: '#ccc', zIndex: 1 }}>
          테스트 결과를 불러오는 중이거나, 테스트가 완료되지 않았습니다.
        </p>
      ) : (
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 0 30px rgba(0,255,0,0.4)',
          maxWidth: '900px',
          width: '100%',
          zIndex: 1,
          animation: 'scaleIn 0.8s forwards',
        }}>
          {/* MBTI - MOKA 결과 표시 */}
          <h2 style={{
            fontSize: '4em',
            fontWeight: '900',
            background: 'linear-gradient(45deg, #aaff00, #00ff00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-2px',
            textShadow: '0 0 15px rgba(0,255,0,0.7)',
            marginBottom: '40px',
          }}>
            {mbti} - {moka}
          </h2>

          {/* % 수치와 설명 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // 2열로 배치
            gap: '20px',
            marginBottom: '40px',
            fontSize: '1.2em',
            lineHeight: '1.5',
            color: '#e0e0e0',
            textAlign: 'left',
          }}>
            <div>
              <h3 style={{ color: '#aaff00', marginBottom: '10px' }}>MBTI 지표</h3>
              {mbtiDimensions.map(dim => (
                <p key={dim.name}>
                  <strong>{dim.group}:</strong> {dim.name} ({mbtiPercentages[dim.name] || 0}%) / {dim.opposite} ({mbtiPercentages[dim.opposite] || 0}%)
                  <br /><span style={{fontSize: '0.85em', color: '#aaaaaa'}}>{dim.description}</span>
                </p>
              ))}
            </div>
            <div>
              <h3 style={{ color: '#aaff00', marginBottom: '10px' }}>MOKA 지표</h3>
              {mokaDimensions.map(dim => (
                <p key={dim.name}>
                  <strong>{dim.group}:</strong> {dim.name} ({mokaPercentages[dim.name] || 0}%) / {dim.opposite} ({mokaPercentages[dim.opposite] || 0}%)
                  <br /><span style={{fontSize: '0.85em', color: '#aaaaaa'}}>{dim.description}</span>
                </p>
              ))}
            </div>
          </div>

          {/* 결과에 대한 간략한 설명 */}
          <p style={{
            fontSize: '1.2em',
            color: '#cccccc',
            lineHeight: '1.6',
            marginBottom: '40px',
            padding: '20px',
            backgroundColor: '#2a2a2a',
            borderRadius: '10px',
            borderLeft: '5px solid #00ff00',
          }}>
            **당신의 유형({mbti}-{moka})은...**<br/>
            {getResultDescription(mbti, moka)}
            <br/><br/>
            (이 설명은 예시이며, 실제 유형 분석에 따라 더 상세하고 정확한 설명을 추가해야 합니다.)
          </p>

          {/* 첫 화면 돌아가기 버튼 */}
          <button
            onClick={() => window.location.href = '/'} // 홈으로 이동
            style={{
              padding: '18px 40px',
              fontSize: '1.4em',
              fontWeight: 'bold',
              color: '#ffffff',
              background: 'linear-gradient(45deg, #007bff, #0056b3)', // 파란색 그라데이션
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 6px 15px rgba(0,123,255,0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,123,255,0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,123,255,0.4)';
            }}
          >
            처음으로 돌아가기
          </button>
        </div>
      )}

      {/* CSS Keyframes for animations (초기화면과 동일) */}
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
};

export default ResultsPage;