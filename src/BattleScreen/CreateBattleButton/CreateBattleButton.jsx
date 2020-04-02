import React from 'react'
import * as Button from '../../helpers/Button/Button'
import "./createBattleButton.css"
import Toggle from "../../utils/Toggle";
import Modal from "../../helpers/Modal/Modal";
import CreateBattleModal from '../CreateBattleModal/CreateBattleModal'


const CreateBattleButton = () => {
    return (
        <>
            <Toggle>
                {({ on, toggle }) => (
                <>
                    <Button.Primary buttonSize="small" id="createBattleButton" onClick={toggle}>Create a battle</Button.Primary>
                    <Modal on={on} toggle={toggle}>
                        <CreateBattleModal/>
                    </Modal>
                </>
                )}
            </Toggle>
        </>
    )
}
export default CreateBattleButton