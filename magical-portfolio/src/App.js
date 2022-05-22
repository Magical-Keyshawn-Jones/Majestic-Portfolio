import './App.css';

function App () {
  const middleSpace = document.querySelector('.middleSpace')
  console.log(middleSpace)
  middleSpace.addEventListener('mouseenter', (event) => {
    alert('It works!')
  })

  return (
    <main>
      <div className = 'appHome'>
        <div className='topSpace'></div>
        <div className='middleSpace'>
          <p>Doorknob</p>
        </div>
        <div className='bottomSpace'></div>
      </div>
    </main>
  )
}

export default App;
