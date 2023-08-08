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
    category= { id : null, clockIn : "",  clockOut: ""}, 
}) {
    return (
        <tr className="hover:bg-slate-100 hover:shadow capitalize">
            <td className="border border-slate-300 text-center py-2 ">{category.id}</td>
            <td className="border border-slate-300 text-center px-2 py-2">{category.clockIn ? category.clockIn : "-"}</td>
            <td className="border border-slate-300 text-center py-2">{category.clockOut ? category.clockOut : "-"}</td>
            {/* <td className="border border-slate-300 px-2 py-2 flex flex-row justify-between gap-2"></td> */}
        </tr>
    )
}



export default RenderTableRows