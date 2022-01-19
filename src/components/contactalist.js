import PropTypes from "prop-types";
import {DeleteBtn, ContactListItem} from "./contactList.styled"
function ContactList ({deleteContacts, onRender}){

  
     return  (<div>
      <h2>Contacts</h2>
      <ul>
     {onRender.map(contact => (<ContactListItem key={contact.id}>
       {contact.name} : {contact.number} 
       <DeleteBtn
           type='button'
           onClick={() => deleteContacts(contact.id)}>Delete
       </DeleteBtn>
     </ContactListItem>))}
   </ul></div>)
  
}
ContactList.propTypes={
  onRender:  PropTypes.array,
  deleteContacts: PropTypes.func
}
export default ContactList
// class ContactList extends Component{

//     render (){
//        return  (<div>
//         <h2>Contacts</h2>
//         <ul>
//        {this.props.onRender.map(contact => (<ContactListItem key={contact.id}>
//          {contact.name} : {contact.number} 
//          <DeleteBtn
//              type='button'
//              onClick={() => this.props.deleteContacts(contact.id)}>Delete
//          </DeleteBtn>
//        </ContactListItem>))}
//      </ul></div>)
//     }
// }
// ContactList.propTypes={
//     onRender:  PropTypes.array,
//     deleteContacts: PropTypes.func
// }
// export default ContactList