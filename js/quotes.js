const quotes = [
  { quote: "삶이 있는 한 희망은 있다", author: "키케로" },
  { quote: "산다는것 그것은 치열한 전투이다", author: "로망로랑" },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
    author: "사무엘존슨",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다",
    author: "파울로 코엘료",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해",
    author: "찰리 채플린",
  },
  { quote: "신은 용기있는자를 결코 버리지 않는다", author: "켄러" },
  { quote: "피할수 없으면 즐겨라", author: "로버트 엘리엇" },
  { quote: "삶은 소유물이 아니라 순간이다", author: "헬렌 켈러" },
  { quote: "문제점을 찾지 말고 해결책을 찾으라", author: "헨리포드" },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드",
  },
  { quote: "내일은 내일의 태양이 뜬다", author: "로버트 슐러" },
  { quote: "행복은 습관이다, 그것을 몸에 지니라", author: "허버드" },
  {
    quote: "직접 눈으로 본 일도 오히려 상상한 것만 못하다",
    author: "헨리 데이비드 소로",
  },
  {
    quote: "판단하는 사람은 잘못된 일보다 도움이 될 만한 일을 더 많이 한다",
    author: "토마스에디슨",
  },
  {
    quote:
      "직장인들이 인생을 낭비하는 가장 큰 원인은 바로 ‘지금 재미없다’라고 생각하는 것이다",
    author: "폴그레이엄",
  },
  { quote: "인내는 쓰지만 그 열매는 달다", author: "아리스토텔레스" },

  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다",
    author: "이소룡",
  },
  {
    quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
    author: "엘사 맥스웰",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다",
    author: "마더 테레사",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todatsQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todatsQuote.quote;
author.innerText = todatsQuote.author;
