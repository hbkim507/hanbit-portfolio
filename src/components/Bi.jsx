// 한/영 병기 텍스트 컴포넌트
// <Bi t={{ ko: '소개', en: 'About' }} /> → 한글 아래에 영어가 붙어 렌더링됩니다.
export function Bi({ t, as: Tag = 'span', className = '', enClass = '' }) {
  if (!t) return null
  return (
    <Tag className={`bi ${className}`.trim()}>
      <span className="bi-ko">{t.ko}</span>
      <span className={`bi-en ${enClass}`.trim()}>{t.en}</span>
    </Tag>
  )
}
