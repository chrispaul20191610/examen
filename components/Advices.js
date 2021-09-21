import React,{useEffect, useState} from 'react';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import styled from "styled-components";
import { Button } from 'antd';
import axios from 'axios';



const Advices = ({advice}) => {

   /* const [state, setState] = useState({
        advice:"",
    })
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async () => {
        const result = await axios.get("https://api.adviceslip.com/advice");
        console.log(result.data.value);
        setState({
          ...state,
          advice: result.data.value,
        });
      };*/


    return (



        <Firstpart>
           <Row>
                <Col span={12}>
                    <Title>
                        <ContTitle> Consejo Del Dia  </ContTitle>
                    </Title>
 

                            <AdviceContent >
                                no jusgues un libro por su portada 
                            </AdviceContent>

                    <div>
                    <Row>
                        <Col span={12}>
                        <Title>
                            <Button type="primary">Marcar como Favorito</Button>
                        </Title>
                        </Col>
                        <Col span={12}>
                        <Title>
                            <Button type="primary">siguiente consejo </Button>
                        </Title>
                        </Col>
                        </Row>
                    </div>


                    
                </Col>
                <Col span={12}>
                <Title>
                    <ContTitle> Consejo Favoritos  </ContTitle>
                </Title>

                <AdviceContent>
                        si ella no te llama no le impoirtas 
                    </AdviceContent>
                </Col>
            </Row> 
        </Firstpart>


    );
};

export default  Advices;

/*stylos con styled */

export const Title = styled.div`
  text-align:center;
  padding-left:1em;
`;
export const ContTitle = styled.h1`
font-weight:bold;
padding-left:1em;
`;

export const AdviceContent = styled.div`
text-align:center;
font-size:22px;
padding:30px;
`;

export const Firstpart = styled.div`
    padding: 1em;
    padding-bottom: 4em;
    border-bottom: 2px solid;
`;

/*api*/ 

export async function getStaticProps (context) {
    let advice = null;
    try{
        const res = await axios.get("https://api.adviceslip.com/advice")
        console.log("res",res);
        advice=advice.data
        
    }
    catch (error){
        console.log(error)

    }
    return {
        props:{
            advice,
        },
    }
}


