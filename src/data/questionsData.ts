// src/data/questionsData.ts

export interface Question {
  id: number;
  questionText: string;
  options: string[];
  // 🔴 새로 추가된 필드:
  // dimension: 질문이 속한 지표 그룹
  dimension: 'E/I' | 'S/N' | 'T/F' | 'J/P' | 'M/B' | 'O/U' | 'K/R' | 'A/Y' | 'Etc';
  // polarity: 해당 질문이 측정하는 지표의 긍정적 방향 (Yes++ 방향)
  polarity: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P' | 'M' | 'B' | 'O' | 'U' | 'K' | 'R' | 'A' | 'Y' | 'Neutral';
}

export const questionsData: Question[] = [
  {
    id: 1,
    questionText: "여러 사람과 어울릴 때 에너지가 생긴다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'E/I', // E/I: 외향형/내향형
    polarity: 'E' // Yes++ 일수록 외향(E) 성향이 강함
  },
  {
    id: 2,
    questionText: "구체적이고 명확한 정보에 민감하다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'S/N', // S/N: 감각형/직관형
    polarity: 'S' // Yes++ 일수록 감각(S) 성향이 강함
  },
  {
    id: 3,
    questionText: "판단은 논리적 근거에 따라 이루어져야 한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'T/F', // T/F: 사고형/감정형
    polarity: 'T' // Yes++ 일수록 사고(T) 성향이 강함
  },
  {
    id: 4,
    questionText: "계획이 있어야 안정된다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'J/P', // J/P: 판단형/인식형
    polarity: 'J' // Yes++ 일수록 판단(J) 성향이 강함
  },
  {
    id: 5,
    questionText: "모임에서 방향을 정하는 역할을 자주 맡는다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'M/B', // M/B: 주도형/순응형
    polarity: 'M' // Yes++ 일수록 주도(M) 성향이 강함
  },
  {
    id: 6,
    questionText: "나에 대한 농담도 유쾌하게 받아들일 수 있다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'O/U', // O/U: 포용형/공격형
    polarity: 'O' // Yes++ 일수록 포용(O) 성향이 강함
  },
  {
    id: 7,
    questionText: "속마음을 드러내는데 거리낌이 없다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'K/R', // K/R: 표현형/주저형
    polarity: 'R' // Yes++ 일수록 표현(K) 성향이 강함
  },
  {
    id: 8,
    questionText: "촌스럽다는 평가가 혹시 나에게 있을까 불안하다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'A/Y', // A/Y: 세련형/촌티형
    polarity: 'Y' // Yes++ 일수록 촌티(Y) 성향이 강함 
  },
   {
    id: 9,
    questionText: "생각이 정리된 후에 대화를 시작하는 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'E/I', // E/I: 외향형/내향형
    polarity: 'I' // Yes++ 일수록 외향(E) 성향이 강함
  },
  {
    id: 10,
    questionText: "요약적이고 상징적인 설명이 잘 이해된다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'S/N', // S/N: 감각형/직관형
    polarity: 'N' // Yes++ 일수록 감각(S) 성향이 강함
  },
  {
    id: 11,
    questionText: "사실 여부보다 상대의 입장이 더 중요할 수 있다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'T/F', // T/F: 사고형/감정형
    polarity: 'F' // Yes++ 일수록 사고(T) 성향이 강함
  },
  {
    id: 12,
    questionText: "약속 시간에 종종 늦는 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'J/P', // J/P: 판단형/인식형
    polarity: 'P' // Yes++ 일수록 판단(J) 성향이 강함
  },
  {
    id: 13,
    questionText: "다른 사람의 제안보다 내 아이디어가 우선시는게 자연스럽다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'M/B', // M/B: 주도형/순응형
    polarity: 'M' // Yes++ 일수록 주도(M) 성향이 강함
  },
  {
    id: 14,
    questionText: "농담하는 사람이 진지하지 않다고 느껴져 불편할 때가 있다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'O/U', // O/U: 포용형/공격형
    polarity: 'U' // Yes++ 일수록 포용(O) 성향이 강함
  },
  {
    id: 15,
    questionText: "기쁘거나 슬플 때 그 마음을 바로 말로 표현한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'K/R', // K/R: 표현형/주저형
    polarity: 'K' // Yes++ 일수록 표현(K) 성향이 강함
  },
  {
    id: 16,
    questionText: "누군가가 나를 부러워하거나 동경하는 시선을 느낀다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'A/Y', // A/Y: 세련형/촌티형
    polarity: 'A' // Yes++ 일수록 촌티(Y) 성향이 강함 
  },
   {
    id: 17,
    questionText: "활동보다는 내적인 집중을 선호한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'E/I', // E/I: 외향형/내향형
    polarity: 'I' // Yes++ 일수록 외향(E) 성향이 강함
  },
  {
    id: 18,
    questionText: "의미와 상징을 담아 전달하려 한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'S/N', // S/N: 감각형/직관형
    polarity: 'N' // Yes++ 일수록 감각(S) 성향이 강함
  },
  {
    id: 19,
    questionText: "결정은 최대한 이성적으로 이루어져야 한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'T/F', // T/F: 사고형/감정형
    polarity: 'T' // Yes++ 일수록 사고(T) 성향이 강함
  },
  {
    id: 20,
    questionText: "마감 기한 전에 미리 끝내는 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'J/P', // J/P: 판단형/인식형
    polarity: 'J' // Yes++ 일수록 판단(J) 성향이 강함
  },
  {
    id: 21,
    questionText: "갈등이 생기면 피하기보다 조정하거나 주도하려한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'M/B', // M/B: 주도형/순응형
    polarity: 'M' // Yes++ 일수록 주도(M) 성향이 강함
  },
  {
    id: 22,
    questionText: "진지한 분위기를 풀기 위해 일부러 장난을 치기도 한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'O/U', // O/U: 포용형/공격형
    polarity: 'O' // Yes++ 일수록 포용(O) 성향이 강함
  },
  {
    id: 23,
    questionText: "누군가 내 감정을 물으면 대답이 망설여진다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'K/R', // K/R: 표현형/주저형
    polarity: 'R' // Yes++ 일수록 표현(K) 성향이 강함
  },
  {
    id: 24,
    questionText: "모임에서 내가 없어도 전혀 티 나지 않을 것 같다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'A/Y', // A/Y: 세련형/촌티형
    polarity: 'Y' // Yes++ 일수록 촌티(Y) 성향이 강함 
  },
   {
    id: 25,
    questionText: "낯선 상황에서 먼저 말을 거는 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'E/I', // E/I: 외향형/내향형
    polarity: 'E' // Yes++ 일수록 외향(E) 성향이 강함
  },
  {
    id: 26,
    questionText: "나는 반복해서 하는 작업에 능숙하다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'S/N', // S/N: 감각형/직관형
    polarity: 'S' // Yes++ 일수록 감각(S) 성향이 강함
  },
  {
    id: 27,
    questionText: "관계나 상황의 맥락도 고려해야 한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'T/F', // T/F: 사고형/감정형
    polarity: 'F' // Yes++ 일수록 사고(T) 성향이 강함
  },
  {
    id: 28,
    questionText: "정리정돈이 잘 되어 있어야 집중된다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'J/P', // J/P: 판단형/인식형
    polarity: 'J' // Yes++ 일수록 판단(J) 성향이 강함
  },
  {
    id: 29,
    questionText: "사람들 앞에서 말하는 것을 두려워하지 않는다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'M/B', // M/B: 주도형/순응형
    polarity: 'M' // Yes++ 일수록 주도(M) 성향이 강함
  },
  {
    id: 30,
    questionText: "남들이 내 실수를 지적하면 민감하게 반응한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'O/U', // O/U: 포용형/공격형
    polarity: 'U' // Yes++ 일수록 포용(O) 성향이 강함
  },
  {
    id: 31,
    questionText: "내가 말을 하면 상대도 잘 받아주는 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'K/R', // K/R: 표현형/주저형
    polarity: 'K' // Yes++ 일수록 표현(K) 성향이 강함
  },
  {
    id: 32,
    questionText: "나는 유행에 뒤쳐지지 않는 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'A/Y', // A/Y: 세련형/촌티형
    polarity: 'A' // Yes++ 일수록 촌티(Y) 성향이 강함 
  },
   {
    id: 33,
    questionText: "낯선 환경에서는 조용히 관찰하는 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'E/I', // E/I: 외향형/내향형
    polarity: 'I' // Yes++ 일수록 외향(E) 성향이 강함
  },
  {
    id: 34,
    questionText: "세부사항보다 전체 흐름을 우선적으로 본다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'S/N', // S/N: 감각형/직관형
    polarity: 'S' // Yes++ 일수록 감각(S) 성향이 강함
  },
  {
    id: 35,
    questionText: "비판은 조심스럽고 배려 있게 해야 한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'T/F', // T/F: 사고형/감정형
    polarity: 'F' // Yes++ 일수록 사고(T) 성향이 강함
  },
  {
    id: 36,
    questionText: "여행일정이 갑자기 바뀌어도 그 변화가 즐겁다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'J/P', // J/P: 판단형/인식형
    polarity: 'P' // Yes++ 일수록 판단(J) 성향이 강함
  },
  {
    id: 37,
    questionText: "분위기를 망칠까 봐 내 의견을 말하지 않는 경우가 종종 있다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'M/B', // M/B: 주도형/순응형
    polarity: 'B' // Yes++ 일수록 주도(M) 성향이 강함
  },
  {
    id: 38,
    questionText: "사소한 잘못헤도 스스로에게 실망하는 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'O/U', // O/U: 포용형/공격형
    polarity: 'U' // Yes++ 일수록 포용(O) 성향이 강함
  },
  {
    id: 39,
    questionText: "대화 중 말을 잘 이어가지 못해 끊기는 경우가 있다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'K/R', // K/R: 표현형/주저형
    polarity: 'R' // Yes++ 일수록 표현(K) 성향이 강함
  },
  {
    id: 40,
    questionText: "거울 속 내 모습이 종종 시대에 안 맞아 보인다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'A/Y', // A/Y: 세련형/촌티형
    polarity: 'Y' // Yes++ 일수록 촌티(Y) 성향이 강함 
  },
   {
    id: 41,
    questionText: "즉흥적인 만남이 즐겁다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'E/I', // E/I: 외향형/내향형
    polarity: 'E' // Yes++ 일수록 외향(E) 성향이 강함
  },
  {
    id: 42,
    questionText: "이미 입증된 방식이 안정감을 준다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'S/N', // S/N: 감각형/직관형
    polarity: 'S' // Yes++ 일수록 감각(S) 성향이 강함
  },
  {
    id: 43,
    questionText: "일의 옳고 그름보다 그로 인해 누가 상처받을지 고려한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'T/F', // T/F: 사고형/감정형
    polarity: 'F' // Yes++ 일수록 사고(T) 성향이 강함
  },
  {
    id: 44,
    questionText: "음식점에서 메뉴를 고를 때마다 빨리 결정을 못한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'J/P', // J/P: 판단형/인식형
    polarity: 'P' // Yes++ 일수록 판단(J) 성향이 강함
  },
  {
    id: 45,
    questionText: "팀 분위기를 해치지 않기 위해 내 생각을 바꾼적이 있다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'M/B', // M/B: 주도형/순응형
    polarity: 'B' // Yes++ 일수록 주도(M) 성향이 강함
  },
  {
    id: 46,
    questionText: "내 의견이 틀렸다는 걸 인정하는 데 큰 어려움은 없다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'O/U', // O/U: 포용형/공격형
    polarity: 'O' // Yes++ 일수록 포용(O) 성향이 강함
  },
  {
    id: 47,
    questionText: "말이 끊길까 봐 대화가 긴장될 때가 있다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'K/R', // K/R: 표현형/주저형
    polarity: 'R' // Yes++ 일수록 표현(K) 성향이 강함
  },
  {
    id: 48,
    questionText: "나는 트렌드에 맞추기보다 그냥 있는 옷을 입는다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'A/Y', // A/Y: 세련형/촌티형
    polarity: 'Y' // Yes++ 일수록 촌티(Y) 성향이 강함 
  },
   {
    id: 49,
    questionText: "공공장소에서 목소리 크기를 조심스럽게 조절해서 말한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'E/I', // E/I: 외향형/내향형
    polarity: 'I' // Yes++ 일수록 외향(E) 성향이 강함
  },
  {
    id: 50,
    questionText: "데이터와 현실 기반의 정보가 설득력 있다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'S/N', // S/N: 감각형/직관형
    polarity: 'S' // Yes++ 일수록 감각(S) 성향이 강함
  },
  {
    id: 51,
    questionText: "원칙과 기준에 따라 행동한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'T/F', // T/F: 사고형/감정형
    polarity: 'T' // Yes++ 일수록 사고(T) 성향이 강함
  },
  {
    id: 52,
    questionText: "결정을 내리고 빠르게 실행한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'J/P', // J/P: 판단형/인식형
    polarity: 'J' // Yes++ 일수록 판단(J) 성향이 강함
  },
  {
    id: 53,
    questionText: "문제가 생기면 책임지고 해결하려는 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'M/B', // M/B: 주도형/순응형
    polarity: 'M' // Yes++ 일수록 주도(M) 성향이 강함
  },
  {
    id: 54,
    questionText: "내 주장과 다르더라도 상대의 입장을 수용할 수 있다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'O/U', // O/U: 포용형/공격형
    polarity: 'O' // Yes++ 일수록 포용(O) 성향이 강함
  },
  {
    id: 55,
    questionText: "대화 흐름을 자연스럽게 이끌기 어려운 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'K/R', // K/R: 표현형/주저형
    polarity: 'R' // Yes++ 일수록 표현(K) 성향이 강함
  },
  {
    id: 56,
    questionText: "나는 매력 어필을 자연스럽게 잘한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'A/Y', // A/Y: 세련형/촌티형
    polarity: 'A' // Yes++ 일수록 촌티(Y) 성향이 강함 
  },
   {
    id: 57,
    questionText: "새로운 사람을 만나는데 거리낌이 없다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'E/I', // E/I: 외향형/내향형
    polarity: 'E' // Yes++ 일수록 외향(E) 성향이 강함
  },
  {
    id: 58,
    questionText: "과거의 사례를 참조해 판단한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'S/N', // S/N: 감각형/직관형
    polarity: 'S' // Yes++ 일수록 감각(S) 성향이 강함
  },
  {
    id: 59,
    questionText: "갈등은 공감과 대화로 해소된다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'T/F', // T/F: 사고형/감정형
    polarity: 'F' // Yes++ 일수록 사고(T) 성향이 강함
  },
  {
    id: 60,
    questionText: "할 일을 리스트로 관리한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'J/P', // J/P: 판단형/인식형
    polarity: 'J' // Yes++ 일수록 판단(J) 성향이 강함
  },
  {
    id: 61,
    questionText: "중요한 자리를 맡는 것에 부담보다 의욕이 앞선다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'M/B', // M/B: 주도형/순응형
    polarity: 'M' // Yes++ 일수록 주도(M) 성향이 강함
  },
  {
    id: 62,
    questionText: "고집이 센 편이라는 말을 종종 듣는다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'O/U', // O/U: 포용형/공격형
    polarity: 'U' // Yes++ 일수록 포용(O) 성향이 강함
  },
  {
    id: 63,
    questionText: "대화 하다 보면 시간 가는 줄 모른다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'K/R', // K/R: 표현형/주저형
    polarity: 'K' // Yes++ 일수록 표현(K) 성향이 강함
  },
  {
    id: 64,
    questionText: "내가 있으면 주변 분위기가 달라지는 걸 느낀다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'A/Y', // A/Y: 세련형/촌티형
    polarity: 'A' // Yes++ 일수록 촌티(Y) 성향이 강함 
  },
   {
    id: 65,
    questionText: "관계 형성에 신중한 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'E/I', // E/I: 외향형/내향형
    polarity: 'I' // Yes++ 일수록 외향(E) 성향이 강함
  },
  {
    id: 66,
    questionText: "만약에 말야 식의 말투를 많이 사용한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'S/N', // S/N: 감각형/직관형
    polarity: 'N' // Yes++ 일수록 감각(S) 성향이 강함
  },
  {
    id: 67,
    questionText: "결정에는 개인 감정을 배제해야 한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'T/F', // T/F: 사고형/감정형
    polarity: 'T' // Yes++ 일수록 사고(T) 성향이 강함
  },
  {
    id: 68,
    questionText: "책장 안의 책이 한권 삐져나와 있으면 엄청 거슬린다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'J/P', // J/P: 판단형/인식형
    polarity: 'J' // Yes++ 일수록 판단(J) 성향이 강함
  },
  {
    id: 69,
    questionText: "사람들을 이끄는 역할에 즐거움을 느낀다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'M/B', // M/B: 주도형/순응형
    polarity: 'M' // Yes++ 일수록 주도(M) 성향이 강함
  },
  {
    id: 70,
    questionText: "생각이 다르면 대화를 피하기보다 풀려고 한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'O/U', // O/U: 포용형/공격형
    polarity: 'O' // Yes++ 일수록 포용(O) 성향이 강함
  },
  {
    id: 71,
    questionText: "사람들과 이야기하는게 피곤하게 느껴진다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'K/R', // K/R: 표현형/주저형
    polarity: 'R' // Yes++ 일수록 표현(K) 성향이 강함
  },
  {
    id: 72,
    questionText: "나를 매력적으로 포장하는데 익숙하지 않다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'A/Y', // A/Y: 세련형/촌티형
    polarity: 'Y' // Yes++ 일수록 촌티(Y) 성향이 강함 
  },
   {
    id: 73,
    questionText: "긴 시간 대화를 해도 지치지 않는다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'E/I', // E/I: 외향형/내향형
    polarity: 'E' // Yes++ 일수록 외향(E) 성향이 강함
  },
  {
    id: 74,
    questionText: "핵심 개념만 알면 전체를 유추할 수 있다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'S/N', // S/N: 감각형/직관형
    polarity: 'N' // Yes++ 일수록 감각(S) 성향이 강함
  },
  {
    id: 75,
    questionText: "조언은 솔직해야 한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'T/F', // T/F: 사고형/감정형
    polarity: 'T' // Yes++ 일수록 사고(T) 성향이 강함
  },
  {
    id: 76,
    questionText: "여러가지 일을 동시에 처리하면 집중이 안된다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'J/P', // J/P: 판단형/인식형
    polarity: 'J' // Yes++ 일수록 판단(J) 성향이 강함
  },
  {
    id: 77,
    questionText: "내게 주어진 역할만 충실히 해도 충분하다고 생각한다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'M/B', // M/B: 주도형/순응형
    polarity: 'B' // Yes++ 일수록 주도(M) 성향이 강함
  },
  {
    id: 78,
    questionText: "나는 평소 말투가 진지하다는 말을 자주 듣는다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'O/U', // O/U: 포용형/공격형
    polarity: 'U' // Yes++ 일수록 포용(O) 성향이 강함
  },
  {
    id: 79,
    questionText: "대화할 때 있는 그대로의 나를 드러내는 편이다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'K/R', // K/R: 표현형/주저형
    polarity: 'K' // Yes++ 일수록 표현(K) 성향이 강함
  },
  {
    id: 80,
    questionText: "주목받으려는 행동은 오히려 나를 어색하게 만든다.",
    options: ["Yes++", "Yes+", "Yes", "Mid", "No", "No+", "No++"],
    dimension: 'A/Y', // A/Y: 세련형/촌티형
    polarity: 'Y' // Yes++ 일수록 촌티(Y) 성향이 강함 
  },
   // 여기에 80문항까지 질문을 추가해야 합니다.
  // 각 질문마다 dimension과 polarity를 정확히 지정해주세요.
];