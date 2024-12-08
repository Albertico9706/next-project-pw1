import DialogModal from "../DialogModal";
import FormJob from "../forms/FormJob";
import ShowModalD from "../ShowModalD";

export default function CreateJob(){
    return(<div>
        <ShowModalD className="btn btn-success btn-square tooltip  fixed bottom-8 right-8 text-3xl text-white" data-tip="Añadir trabajo">
            +
        </ShowModalD>
        <DialogModal>
        <FormJob/>
        </DialogModal>
    </div>
        
    )
}