// import Confirmation from "../product/components/confirmation"

const RenderTableRows = ({
    categories = [],
}) => categories.map((category, index) => {
        return (
            <NormalRow
                category={category} 
            />
        )
    
})

function NormalRow ({
    category= { period : null, salary : "",  deduction: "", amount : ""}, 
}) {
    return (
        <tr className="hover:bg-slate-100 hover:shadow capitalize">
            <td className="border border-slate-300 text-center py-2 ">{category.period}</td>
            <td className="border border-slate-300 text-center px-2 py-2">{conversion(category.salary)}</td>
            <td className="border border-slate-300 text-center py-2">{conversion(category.deduction)}</td>
            <td className="border border-slate-300 text-center px-2 py-2 ">{conversion(category.amount)}</td>
        </tr>
    )
}
function conversion(value) {
    let convertToString = String(value)
    //buat 1 array isinya masing masing file
    let arrs = []
    let subs = ""
    let index = 1;
    for(let i = convertToString.length - 1; i >= 0; i--) {
        subs = convertToString[i] + subs
        if(index === 3){
          subs = "."+subs
          arrs.unshift(subs)
          subs = ""
          index = 0
        }
        index++
    }
    if(convertToString.length % 3 === 0){
    arrs[0] = arrs[0].split(".")[1]
      arrs.unshift(("Rp "+subs))
    }
    else{
      arrs.unshift(("Rp "+subs))
    }
    let result = arrs.join("")
    return result
  }



export default RenderTableRows