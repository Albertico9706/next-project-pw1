import DialogModal from "../DialogModal";
import FormJob from "../forms/FormJob";
import ButtonShowModal from "../ButtonShowModal";

export default function CreateJob(){
    return(<div>
        <ButtonShowModal className="btn btn-success btn-square tooltip  fixed bottom-8 right-8 text-3xl text-white" data-tip="Añadir trabajo">
            +
        </ButtonShowModal>
        <DialogModal>
        <FormJob/>
        </DialogModal>
    </div>
        
    )
}