export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen h-full w-full flex-col space-y-20">
      <div className="text-4xl uppercase">Trò chơi ô chữ</div>
      <div className="flex flex-col items-center space-y-16">
        <div className="flex flex-row space-x-12">
          <a className="px-8 py-6 shadow-lg rounded-lg text-3xl" href={'/kv1/topic-1'}>KV1</a>
          <a className="px-8 py-6 shadow-lg rounded-lg text-3xl" href={'/kv2/topic-1'}>KV2</a>
          <a className="px-8 py-6 shadow-lg rounded-lg text-3xl" href={'/kv3/topic-1'}>KV3</a>
        </div>
        {/*<a className="px-8 py-6 shadow-lg rounded-lg text-3xl" href={'/final/topic-1'}>CHUNG KẾT</a>*/}
      </div>
    </div>
  )
}