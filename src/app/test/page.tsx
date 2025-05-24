// src/app/test/page.tsx

'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { questionsData as allQuestions, Question } from '@/data/questionsData';

interface Answer {
  questionId: number;
  selectedOptionIndex: number; // 0 (Yes++) ~ 6 (No++)
  score: number; // 7점 (Yes++) ~ 1점 (No++)
}

const TestPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOptionForCurrentQ, setSelectedOptionForCurrentQ] = useState<number | null>(null); // 현재 질문에서 선택된 옵션 인덱스

  // 7가지 선택지 정의 (텍스트와 점수)
  const optionsConfig = [
    { text: "Yes++", score: 7, colors: ["#50C878", "#3CB371"] }, // 에메랄드 그린
    { text: "Yes+", score: 6, colors: ["#66CDAA", "#4CAF50"] },  // 아쿠아 마린
    { text: "Yes", score: 5, colors: ["#90EE90", "#7CFC00"] },   // 연두색
    { text: "Mid", score: 4, colors: ["#444444", "#333333"] },   // 진회색 (Mid만 다르게)
    { text: "No", score: 3, colors: ["#FFD700", "#FFA500"] },    // 골드
    { text: "No+", score: 2, colors: ["#FF8C00", "#FF4500"] },   // 다크 오렌지
    { text: "No++", score: 1, colors: ["#FF6347", "#FF0000"] },  // 토마토 레드
  ];

  useEffect(() => {
    const ids = searchParams.get('ids');
    if (allQuestions && Array.isArray(allQuestions)) {
      let filteredQuestions = allQuestions;
      if (ids) {
        const questionIds = ids.split(',').map(Number);
        filteredQuestions = allQuestions.filter(q => questionIds.includes(q.id));
      }
      setQuestions(filteredQuestions);
      setCurrentQuestionIndex(0);
      setAnswers([]);
      setSelectedOptionForCurrentQ(null); // 새 테스트 시작 시 초기화
    } else {
      console.error("questionsData를 불러오지 못했거나 형식이 올바르지 않습니다.");
    }
  }, [searchParams]);

  // 답변 선택 핸들러 (자동으로 다음 문제로 넘어가도록 수정)
  const handleOptionSelect = useCallback((optionIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      const selectedScore = optionsConfig[optionIndex].score; // 선택된 옵션의 점수

      // 답변 저장 (또는 업데이트)
      setAnswers(prevAnswers => {
        const existingAnswerIndex = prevAnswers.findIndex(a => a.questionId === currentQuestion.id);
        if (existingAnswerIndex > -1) {
          const newAnswers = [...prevAnswers];
          newAnswers[existingAnswerIndex] = {
            questionId: currentQuestion.id,
            selectedOptionIndex: optionIndex,
            score: selectedScore
          };
          return newAnswers;
        }
        return [
          ...prevAnswers,
          { questionId: currentQuestion.id, selectedOptionIndex: optionIndex, score: selectedScore }
        ];
      });

      setSelectedOptionForCurrentQ(optionIndex); // 현재 선택된 옵션 시각적 표시를 위해 저장

      // 0.3초 후에 다음 문제로 자동 전환
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(prevIndex => prevIndex + 1);
          setSelectedOptionForCurrentQ(null); // 다음 문제로 넘어가면 선택 상태 초기화
        } else {
          // 모든 질문에 답변 완료, 결과 페이지로 이동
          const encodedScores = answers.map(a => a.score).join(','); // 점수를 넘기도록 변경
          router.push(`/results?scores=${encodedScores}`); // scores 파라미터로 변경
        }
      }, 300); // 300ms (0.3초) 지연
    }
  }, [questions, currentQuestionIndex, answers, optionsConfig, router]);


  const currentQuestion = questions[currentQuestionIndex];

  if (questions.length === 0) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        fontSize: '1.2em'
      }}>
        질문을 불러오는 중이거나 질문이 없습니다.
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      // minHeight를 100vh로 설정하여 화면 전체 높이 사용
      minHeight: '100vh', 
      backgroundColor: '#000000', // 전체 검은색 배경
      color: '#e0e0e0',
      fontFamily: 'Pretendard, Arial, sans-serif',
      padding: '20px',
      boxSizing: 'border-box', // 패딩이 너비/높이에 포함되도록
      position: 'relative',
      overflow: 'hidden', // 배경 효과를 위해
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


      {/* 🔴 맨 위 상단에 현재문제번호/총문제수 표기 */}
      <div style={{
        textAlign: 'center',
        color: '#aaff00',
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginBottom: '20px', // 문제 번호와 진행 바 사이 간격
        textShadow: '0 0 5px rgba(170,255,0,0.5)',
        zIndex: 1, // 다른 요소 위에 오도록
      }}>
        {currentQuestionIndex + 1} / {questions.length}
      </div>

      {/* 상단 진행 바 */}
      <div style={{
        width: '100%',
        height: '8px',
        backgroundColor: '#333',
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: '40px', // 진행 바와 질문 박스 사이 간격
        zIndex: 1,
      }}>
        <div style={{
          width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #00ff00, #aaff00)',
          borderRadius: '4px',
          transition: 'width 0.5s ease-out',
        }}></div>
      </div>

      {/* 🔴 질문 박스 - 연한 노란색 (질문만 담김) */}
      <div style={{
        // 질문 박스가 상단에 위치하도록 flex 속성 조절
        marginBottom: 'auto', // 아래로 공간을 최대한 밀어냄 (버튼과의 간격 유지에 도움)
        marginTop: '0', // 상단에 바싹 붙도록
        padding: '30px',
        backgroundColor: '#FFFACD', // 연한 노란색 (Lemon Chiffon)
        borderRadius: '12px',
        border: '2px solid #FFC107', // 노란색 테두리
        boxShadow: '0 8px 20px rgba(255,215,0,0.3)', // 노란색 그림자
        color: '#333333', // 질문 글씨색
        fontSize: '1.7em',
        fontWeight: 'bold',
        lineHeight: '1.6',
        animation: 'fadeInQuestion 0.8s ease-out',
        display: 'flex', // 텍스트 중앙 정렬을 위해 추가
        alignItems: 'center', // 세로 중앙 정렬
        justifyContent: 'center', // 가로 중앙 정렬
        flexGrow: 1, // 남은 공간을 채우면서 위로 올라가도록
        maxHeight: '60%', // 최대 높이 제한 (버튼 공간 확보)
        overflowY: 'auto', // 질문이 길면 스크롤
        zIndex: 1,
      }}>
        <p style={{ margin: 0, textAlign: 'center' }}>{currentQuestion.questionText}</p>
      </div>

      {/* 🔴 7가지 선택지 버튼 컨테이너 (한 줄로 배치, 고정된 크기) */}
      <div style={{
        display: 'flex', // 가로로 나열
        justifyContent: 'center', // 가운데 정렬
        alignItems: 'center', // 세로 가운데 정렬
        gap: '5px', // 🔴 버튼 간 간격 더 좁게
        marginTop: '30px', // 🔴 질문 박스와 버튼 사이 간격 확보
        paddingBottom: '20px', // 하단 패딩
        flexShrink: 0, // 컨테이너가 줄어들지 않도록
        flexWrap: 'nowrap', // 🔴 버튼이 절대 줄바꿈되지 않도록 (한 줄 유지)
        overflowX: 'auto', // 만약 버튼이 화면을 넘어가면 스크롤 가능하게 (최소화)
        zIndex: 1,
      }}>
        {optionsConfig.map((option, index) => {
          const isMid = option.text === "Mid";
          const isSelected = selectedOptionForCurrentQ === index;

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              style={{
                width: '60px', // 🔴 버튼 고정 너비 (더 작게)
                height: '80px', // 🔴 버튼 고정 높이 (세로 타원형)
                padding: '0', // 패딩 제거 (내부 텍스트 중앙 정렬)
                fontSize: '0.95em', // 🔴 폰트 크기 조정
                fontWeight: 'bold',
                borderRadius: '40px', // 🔴 세로 타원형 (높이의 절반)
                border: isSelected ? '3px solid #FFFF00' : 'none',
                backgroundColor: isMid ? option.colors[0] : 'transparent',
                backgroundImage: isMid ? 'none' : `linear-gradient(45deg, ${option.colors[0]}, ${option.colors[1]})`,
                color: isSelected ? '#000000' : '#ffffff',
                cursor: 'pointer',
                boxShadow: isSelected ? '0 0 20px rgba(255,255,0,0.7)' : '0 4px 10px rgba(0,0,0,0.4)',
                transition: 'all 0.3s ease',
                outline: 'none',
                display: 'flex', // 텍스트 중앙 정렬
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0, // 버튼이 줄어들지 않도록 (필수)
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow = isSelected ? '0 0 25px rgba(255,255,0,0.9)' : '0 6px 15px rgba(0,0,0,0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = isSelected ? '0 0 20px rgba(255,255,0,0.7)' : '0 4px 10px rgba(0,0,0,0.4)';
              }}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {/* CSS Keyframes for animations */}
      <style jsx>{`
        @keyframes fadeInQuestion {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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

export default TestPage;