// ⚠️ Firebase 콘솔 > 프로젝트 설정 > 일반 > 내 앱 에서 복사한 값으로 교체하세요.
// (동행프로그램 조회 시스템에서 쓰신 것과 같은 방식으로 새 프로젝트를 만들거나,
//  기존 프로젝트에 컬렉션만 새로 추가해서 써도 됩니다.)
const firebaseConfig = {
  apiKey: "AIzaSyBh_cT9NMr942_eFiFpp_m_f0TouyJGzqI",
  authDomain: "group-game-92263.firebaseapp.com",
  databaseURL: "https://group-game-92263-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "group-game-92263",
  storageBucket: "group-game-92263.firebasestorage.app",
  messagingSenderId: "116789155975",
  appId: "1:116789155975:web:67262c8477545ff6e90022",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// ℹ️ 영상은 Firebase Storage에 올리지 않고 구글 드라이브 링크만 텍스트로 저장하므로
//    Storage 초기화는 더 이상 필요 없습니다.
// ℹ️ 12가지 동작 이름·유튜브 링크·배점은 이제 admin.html의 "학습자료" 탭에서 관리합니다
//    (Firestore settings/config 문서에 저장). 여기서 수정할 필요 없습니다.

// 교사 관리자 비밀번호 (배포 전 꼭 바꾸세요)
const ADMIN_PASSWORD = "2456";
