import React ,{useState}from 'react'
import Navbar from '../navbar/Navbar'
import Topbar from '../Topbar/Topbar'
const TotalAdmin = () => {
    const [show, setshow] = useState(false);
  const[shownotificationicon,setshownotificationicon]=useState(false);
  const [showicon, setshowicon] = useState(false);
  return (
    <div>
        <div className="section-padding section-bg">
        <div className="row secondpage">
        <div className="col-md-2  firstcolumn">
            <Navbar/>
          </div>
          <div className="col-md-10 secondcol">
          <div className="row">
          <Topbar shownotificationicon={shownotificationicon} setshownotificationicon={setshownotificationicon} setshowicon={setshowicon} show={show} showicon={showicon} setshow={setshow}/>
            </div>
            <table className='total-user-table margin-left-3'>
             

              <div className='row custom-row total-user-row'>
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>S.N</td>

                <td className='col-md-3 col-sm-1 '>Name</td>
                <td className='col-md-2 col-sm-2 '>Phone</td>
                <td className='col-md-1 col-sm-1 '>gender</td>
                <td className='col-md-2 col-sm-2 '>district</td>
                <td className='col-md-2 col-sm-2 '>address</td>
                <td className='col-md-1 col-sm-1 '>invite_code</td>

                
              </tr>
              
              </div>

              <div className='row custom-row total-user-body total-user-row'>
              <tr className='row table-dx'>
              <td className='col-md-1 col-sm-1 '>1</td>

<td className='col-md-3 col-sm-1 '>pawan</td>
<td className='col-md-2 col-sm-2 '>9999</td>
<td className='col-md-1 col-sm-1 '>male</td>
<td className='col-md-2 col-sm-2 '>kavre</td>
<td className='col-md-2 col-sm-2 '>panauti-4</td>
<td className='col-md-1 col-sm-1 '>0000</td>


                
              </tr>
              <hr></hr>


              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
<hr></hr>

              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>
              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>
              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>

              
              <tr className='row table-dx'>
                <td className='col-md-1 col-sm-1 '>1</td>

                <td className='col-md-3 col-sm-1 '>pawan</td>
                <td className='col-md-2 col-sm-2 '>9999</td>
                <td className='col-md-1 col-sm-1 '>male</td>
                <td className='col-md-2 col-sm-2 '>kavre</td>
                <td className='col-md-2 col-sm-2 '>panauti-4</td>
                <td className='col-md-1 col-sm-1 '>0000</td>

                
              </tr>
              <hr></hr>


              </div>

              
            </table>

          </div>
            </div>
        </div>
    </div>
  )
}

export default TotalAdmin