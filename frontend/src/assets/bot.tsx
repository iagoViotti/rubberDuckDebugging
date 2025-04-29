export default function Bot({ ...props }) {
  const { fill='#b8b8b8', width='2em', height='2em', stroke='#000000' } = props;
  return (
    <>
      <svg fill={fill} width={width} height={height} viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke={stroke} strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke={stroke} strokeWidth="0.096"></g><g id="SVGRepo_iconCarrier"><path d="M5,7A1,1,0,0,0,4,8V22a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V8a1,1,0,0,0-1-1H13V4.723a2,2,0,1,0-2,0V7ZM18,9V21H6V9ZM7,13a1,1,0,0,1,1-1h2a1,1,0,0,1,0,2H8A1,1,0,0,1,7,13Zm6,0a1,1,0,0,1,1-1h2a1,1,0,0,1,0,2H14A1,1,0,0,1,13,13ZM1,14V12a1,1,0,0,1,2,0v2a1,1,0,0,1-2,0Zm22-2v2a1,1,0,0,1-2,0V12a1,1,0,0,1,2,0ZM7,18a1,1,0,0,1,1-1h8a1,1,0,0,1,0,2H8A1,1,0,0,1,7,18Z"></path></g></svg>
    </>
  )
}
