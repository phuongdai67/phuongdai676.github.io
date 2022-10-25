import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container, TextInput, Select, Textarea,Button } from 'react-materialize'
export default function Contact () {
    const handleSubmit =(e)=> {
        e.preventDefault()
      }    
    return (
        <Container className='contact_us'>
            <h3>Contact us</h3>
            <form className='contact' onSubmit={handleSubmit}>
                <TextInput emailid="TextInput-82"label="Your Name"validate/>
                <TextInput emailid="TextInput-82"label="Your Phone Number"validate/>
                <TextInput emailid="TextInput-82"label="Email"validate/>
                <Select id='Select-46' multiple={false} onChange={function noRefCheck() {}}value=''>
                    <option disabled value=''>
                        Choose your favorite nation
                    </option>
                    <option value='1'>
                        USA
                    </option>
                    <option value='2'>
                        Japan
                    </option>
                </Select>
                <TextInput emailid="TextInput-82"label="Your thoughts"validate/>
                <Button
                     node="button"
                     type="submit"
                     waves="light"
                     >
                     Submit
                <Icon right>
                     send
                </Icon>
                </Button>
            </form>
        </Container>
)}