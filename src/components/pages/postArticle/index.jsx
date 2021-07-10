import React, { useState } from 'react'
import { Container, Form, Button, Image } from 'react-bootstrap'
import axios from 'axios'
const Post = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState("")
    const publish = async (e) => {
        let form_data = new FormData();
        form_data.append('image', image, image.name);
        form_data.append('title', title);
        form_data.append('description', desc);
        form_data.append('category', category);
        form_data.append('username', "u");
        let res = await axios.post("https://article.pythonanywhere.com/post/posts/", form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res)

    }

    return (
        <Container>
            <h5>Post your Article</h5>
            <Container className="justify-content-center w-75 mt-5">
                <Form onSubmit={publish}>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label><b>Title</b></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title here"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupCategory">
                        <Form.Label><b>Category</b></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Category here"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescrition">
                        <Form.Label><b>Description</b></Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Type your description here "
                            style={{ height: '200px' }}
                            value={desc} onChange={e => setDesc(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupTitle" accept="image/png, image/jpeg">
                        <Form.Control
                            type="file"
                            required
                            placeholder="Upload image"

                            onChange={e => {
                                const reader = new FileReader()
                                reader.onload = () => {
                                    if (reader.readyState === 2) {
                                        setImage(reader.result)
                                    }
                                }
                                reader.readAsDataURL(e.target.files[0])
                                setImage(e.target.files[0])
                                console.log(e.target.files[0])
                            }}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        {
                            image !== "" &&
                            <Image fluid src={image} alt="" height="500" width="500" />
                        }

                    </div>
                    <div className="d-flex justify-content-end">
                        <Button type="sumbit" variant="outline-success">Publish</Button>
                    </div>
                </Form>
            </Container>
        </Container>
    )
}

export default Post;