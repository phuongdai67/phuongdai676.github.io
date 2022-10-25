import React from 'react'
import { Container,TextInput, Textarea, Icon, Button,Card,Collapsible,CollapsibleItem } from 'react-materialize'
export default function About() {
   const handleSubmit =(e)=> {
      e.preventDefault()
    }
  
   return (
      <div className='about_comp'>
      <Collapsible accordion>
  <CollapsibleItem
    expanded={false}
    header="Who we are ?"
    icon={<Icon>group</Icon>}
    node="div"
  >
    We complies and copyrights movies !
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="What is our purpose ?"
    icon={<Icon>movie</Icon>}
    node="div"
  >
    We bring the cinema at the flick of your hand !
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="How can you help ?"
    icon={<Icon>whatshot</Icon>}
    node="div"
  >
    Go to the contact page and gives us your feedback !
  </CollapsibleItem>
</Collapsible>
</div>
   )

}