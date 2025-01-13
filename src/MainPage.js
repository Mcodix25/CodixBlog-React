
import SubMainPage from './SubMainPage';
import DivisionTwo from './DivisionTwo';
import DivisionThree from './DivisionThree';
import DivisionFour from './DivisionFour';
import DivisionFive from './DivisionFive';
import Divisionsix from './Divisionsix';
import DivisionSeven from './DivisionSeven';
import DivisionEigth from './DivisionEight';
import DivisionNine from './DivisionNine';

const MainPages = ()=>{
    return(
        
         <>
            <h1>Main Page</h1>
        <div className='divOne'>
            <h2> Division 1</h2>
            <SubMainPage/>
        </div> 
        <div className='divTwo'>
            <h2> Division 2</h2>
            <DivisionTwo/>
        </div>
        <div className='divOne'>
            <h2> Division 3</h2>
            <DivisionThree/>
        </div>
        <div>
            <DivisionFour/>
        </div>
        <div>
            <DivisionFive/>
        </div>
        <div>
            <Divisionsix/>
        </div>
        <div>
            <DivisionSeven/>
        </div>
        <div>
            <DivisionEigth/>
        </div>
        <div>
            <DivisionNine/>
        </div>
         </>
         
    )
}

export default MainPages;