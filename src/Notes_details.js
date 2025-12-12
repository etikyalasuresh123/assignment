import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";


function Notes_details(){

    const [note, setnotes] = useState([])
     const [editingNote, setEditingNote] = useState(null); 
    const [formData, setFormData] = useState({ Book_name: '', Contact: '', Book_price: '' });
     const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
         axios.get('https://assignment-9fe0f-default-rtdb.firebaseio.com/notes.json').then(r1=>{
        //console.log(r1.data);
        setnotes(r1.data)
    })
        
    },[])

   
    const deleteNote = (key) => {

        axios.delete( `https://assignment-9fe0f-default-rtdb.firebaseio.com/notes/${key}.json`).then(() => {
            alert("Note Deleted Successfully");

        axios.get("https://assignment-9fe0f-default-rtdb.firebaseio.com/notes.json").then((r1) =>
            setnotes(r1.data || {}));
      });
  };

    const handleEdit = (note) => {
        setEditingNote(note);
        setFormData({ Book_name: note.Book_name, Contact: note.Contact, Book_price: note.Book_price });
  };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  
    const handleSave = () => {
        if (!editingNote) return;
        axios.put(`https://assignment-9fe0f-default-rtdb.firebaseio.com/notes/${editingNote.id}.json`, formData).then(() => {
            alert("Note Updated Successfully");
            setEditingNote(null);
            setFormData({ Book_name: '', Contact: '', Book_price: '' });
            
            axios.get("https://assignment-9fe0f-default-rtdb.firebaseio.com/notes.json")
            .then(r1 => setnotes(r1.data || {}));
        });
    };


      
    const Available_notes = Object.keys(note).map((key) => ({
        id: key,  
        Book_name: note[key].Book_name,
        Contact: note[key].Contact,
        Book_price: note[key].Book_price,
    }));
    console.log('available_notes :', Available_notes);




    return(
        <>
           <div className= "container mt-5">
            <center><u><h5><b>Notes_details</b></h5></u></center>


            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Book Price</th>
                    <th>Action</th>
                   
                    </tr>
                </thead>
            <tbody>
                {
                    Available_notes.map((x,index)=><tr key={x.id}>
                        <th scope="row">{index+1}</th>
                        <td>{x.Book_name}</td>
                        <td>{x.Contact}</td>
                        <td>{x.Book_price}</td>
                        
        
                         
                        <td>
                            <button className="btn btn-primary me-2" onClick={() => handleEdit(x)}>Edit</button>
                            <button className="btn btn-danger"onClick={() => deleteNote(x.id)}> Delete</button>
                        </td>
                        
                    </tr>

                    
                    )
                }
                
            </tbody>
            </table>
            
            <div className="text-center"><a href="/addnotes">Back</a><br/></div>

            

            {editingNote &&
                    <div className="card p-3 mt-3">
                    <h5 className="text-center">Edit Note</h5>
                    <div className="mb-2">
                        <input type="text" name="Book_name" value={formData.Book_name} onChange={handleChange} className="form-control" placeholder="Book Name" />
                    </div>
                    <div className="mb-2">
                        <input type="text" name="Contact" value={formData.Contact} onChange={handleChange} className="form-control" placeholder="Contact"
                        />
                    </div>
                    <div className="mb-2">
                        <input type="text" name="Book_price" value={formData.Book_price} onChange={handleChange} className="form-control" placeholder="Book Price"
                        />
                    </div>
                    <button className="btn btn-success me-2" onClick={handleSave}>Save</button><br/>
                    <button className="btn btn-secondary" onClick={() => setEditingNote(null)}>Cancel</button>
                    </div>
                }

            
        </div>
        
        </>
    )
}


export default Notes_details;