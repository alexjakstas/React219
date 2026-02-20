import './Header.css';

function Header() {
    return(
        <div className='p-20 bg-blue-400'>
              <h1 className='text-7xl pb-8'>Welcome to 30 Days Of React</h1>
              <h2 className='text-2xl pb-3'>Getting Started React</h2>
               <h3>JavaScript Library</h3>
               <h4 className='text-sm'>Instructor: Asanbeneh Yetayeh</h4>
               <p className='text-xs'>Date: Oct 3, 2020</p>
            </div>
    );
}

export default Header;