function App() {

  return (
    <>
      <section className="grid gap-4 m-4 sm:grid-cols-2">
        <div className="rounded bg-orange-400 min-h-[100px] shadow-xl">1</div>
        <div className="rounded bg-teal-400 min-h-[100px] shadow-xl">2</div>
      </section>

      <section className="grid gap-4 m-4 sm:grid-cols-3">
        <div className="rounded bg-green-400 min-h-[100px] shadow-xl">1</div>
        <div className="rounded bg-red-400 min-h-[100px] shadow-xl">2</div>
        <div className="rounded bg-pink-400 min-h-[100px] shadow-xl">3</div>
      </section>

      <section className="grid gap-4 m-4 sm:grid-cols-12">
        <div className="rounded bg-teal-700 min-h-[100px] shadow-xl sm:col-span-4">1</div>
        <div className="rounded bg-pink-700 min-h-[100px] shadow-xl sm:col-span-8">2</div>
      </section>

      <section className="grid gap-4 m-4 sm:grid-cols-12">
        <div className="rounded bg-teal-300 min-h-[100px] shadow-xl hidden sm:col-span-2 sm:block">1</div>
        <div className="rounded bg-pink-300 min-h-[100px] shadow-xl sm:col-span-8">2</div>
        <div className="rounded bg-red-300 min-h-[100px] shadow-xl hidden sm:col-span-2 sm:block">3</div>
      </section>
    </>
  )
}

export default App
