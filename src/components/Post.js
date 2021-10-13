import React, { useState, useEffect } from "react";
import "../styles/post.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Col } from "react-bootstrap";
import Axios from "axios";
import { variables } from "./variables";
import { Pagination, Input } from "antd";
import 'antd/dist/antd.min.css';
import Modal from "./Modal";


const { Search } = Input;

export const Post = () => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);



  const getData = (title, body, id) => {
    let tempData = [title, body, id];
    setTempdata(item => [1, ...tempData])
    return setModal(true);
  }

  useEffect(() => {
    Axios.get(variables.API_URL + "posts")
      .then((response) => {
        setPosts(response.data);
        setTotal(response.data.length);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  const currentPosts = posts.slice(page, postPerPage + page)

  const onShowSizeChange = (current, pageSize) => {
    setPage(current)
    setPostPerPage(pageSize)
    console.log(currentPosts)
  }

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }

    return originalElement;
  }



  return (
    <>
      <Search
        className="search"
        placeholder="input search text"
        allowClear
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        style={{ width: 200 }}
      />
      <Container className="d-flex flex-wrap justify-content-center">
        {currentPosts.filter((val) => {
          if (searchTerm == "") {
            return val
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.body.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val
          }
        }).map(post => (
          <>
            <Col md={4} sm={12} lg={3} className="card" key={post.id} onClick={() => getData(post.title, post.body, post.id)}>
              <Card.Img
                variant="top"
                src="https://admnvrsk.ru/upload/resize_cache/iblock/440/600_600_2/440d8445edc9f9527669db6dd078219d.jpg"
              />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.body.split(" ").splice(0, 7).join(" ")+"..."}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text">Read more...</small>
              </Card.Footer>
            </Col>

          </>
        ))}
        {
          modal === true ? <Modal title={tempdata[1]} body={tempdata[2]} id={tempdata[3]} hide={() => setModal(false)} /> : ""
        }
      </Container>
      <Pagination
        onChange={(val) => setPage(val)}
        pageSize={postPerPage}
        total={total}
        current={page}
        showQuickJumper
        showSizeChanger
        onShowSizeChange={(e, i) => onShowSizeChange(e, i)}
        itemRender={itemRender}
      />
    </>
  );
};


