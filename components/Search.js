import React,{useEffect, useState} from 'react';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import styled from "styled-components";
import { Button } from 'antd';
import axios from 'axios';
import { Form, Input, Checkbox } from 'antd';

const search = () => {

    return (
        <div>
            <Row>
                <Col span={24}>
                
                <Title>Buscador de Consejos </Title >

                <Title>
                <Form
                    name="basic"
                        labelCol={{
                         span: 8,
                         }}
                    wrapperCol={{
                span: 16,
                    }}
                    initialValues={{
                    remember: true,
                }}
                
                autoComplete="on"
                >
                    <Form.Item
                    label="Palabra Clave"
                name="Palabra Clave"
                rules={[
                 {
                 required: true,
            
                 },
                 ]}
                 >

                  <Input styled={"widht:50%"} />
                  

                    
                </Form.Item>
                <Button type="primary" htmlType="submit">
                     Buscar
                 </Button>
                

                </Form>

                 <div>Resultados de busqueda</div>
                </Title>


                    
                </Col>
            </Row>
        </div>

    );


};

export default search;

/*styled*/ 
export const Title = styled.div`
  text-align:center;
  padding-left:1em;
  font-weight:bold;
  font-size:22px;

`;
