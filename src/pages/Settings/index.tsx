import { useEffect, useState } from "react"

import { useTabMenuContext } from '../../contexts/TabMenuContext';

import { Container, Content, ContentSectionDiv, HeaderButtonsDiv, HeaderDiv, ItemContentSectionDiv, LabelItem, LabelItemContentSectionDiv, SectionDiv, SubTitleSection, TitleItem, TitleItemContentSectionDiv, TitleSection, TitleSectionDiv } from "./styles";
import { Button, TextField } from "@mui/material";






export const Settings = () => {
    const { handleChangeTabMenuContext } = useTabMenuContext();

    const [editingEnabled, setEditingEnabled] = useState(false)

    //labels
    const [extracaoFragmentos, setExtracaoFragmentos] = useState(false)
    const [modeloLLMS, setModeloLLMS] = useState('gpt-4-0613')
    const [contextWindow, setContextWindow] = useState(3000)

    const [questions, setQuestions] = useState([
        'Qual recurso está sendo julgado (recurso extraordinário ou agravo)?',
        'Qual órgão julgador proferiu o acórdão recorrido?',
        'Houve reforma ou confirmação de decisão anterior?',
        'O acórdão recorrido foi proferido por unanimidade de votos ou por maioria?',
        'Quais são os fundamentos apresentados pelo relator?',
        'Qual é a transcrição literal da ementa?',
        'Qual foi o juízo de admissibilidade do recurso extraordinário (admissão ou inadmissão) e quais os seus fundamentos (matéria infraconstitucional, súmula 279 etc.)?',
        'O recurso extraordinário foi interposto com fundamento em qual dispositivo constitucional (art. 102, III, a, b, c ou d, da CF)?',
        'Quais os dispositivos indicados como violados e quais os argumentos relevantes do recurso?',
        'Quais os pedidos formulados no recurso?',
        'Há contrarrazões e quais são os argumentos relevantes do recurso?'
    ])

    const [answers, setAnswers] = useState([
        'Você deverá descobrir qual é o recurso desse processo. Existem somente dois tipos de recursos: Recurso extraordinário ou agravo. O recurso extraordinário é um recurso para buscar uma questão constitucional que foi citado ao longo do processo, mas que apenas pode ser resolvida pelo Supremo Tribunal Federal. O agravo questiona as razões pelas quais o recurso foi negado. Normalmente essa informação ficará no documento mais recente e após alguma frase do tipo "Interpor o Presente". Pode ser que o nome do arquivo tenha uma dica do tipo do recurso, como por exemplo "agravo.pdf" ou "re.pdf". Você deverá se limitar a responder somente se é um recurso extraordinário ou agravo, ou seja, não poderá explicar a razão da resposta ou mencionar o arquivo utilizado.',
        'Você deverá descobrir qual é a pessoa e o tribunal julgador mencionado pelo documento de agravo ou recurso extraordinário. Essa informação estará no inicio do documento e normalmente ela ficará no documento mais recente. Se esse processo for um recurso extraordinário, essa informação poderá estar no arquivo nomeado com a palavra re, como exemplo "re.pdf". No caso de um agravo, essa informação poderá estar no arquivo nomeado com a palavra agravo, como exemplo "agravo.pdf".',
        'Você deverá informar se houve uma reforma ou confirmação da decisão anterior. Normalmente a decisão anterior será citada no acordão recorrido no recurso extraordinário ou no agravo. Essa decisão, normalmente, será uma sentença. O acordão recorrido do recurso extraordinário será a decisão anterior ao recurso. No caso do agravo, será o acordão que negou o andamento do recurso. A informação estará localizada no arquivo do acordão, como exemplo "acordao.pdf", na parte nomeada "Acordão". Não estará localizado no arquivo do agravo, normalmente é um arquivo nomeado como "agravo.pdf". Você deverá se limitar a responder somente a pergunta sem mencionar o arquivo utilizado.',
        'O acórdão recorrido foi proferido por unanimidade de votos ou por maioria? A informação estará localizada no arquivo do acordão, como exemplo "acordao.pdf", na parte nomeada "Acordão". Não estará localizado no arquivo do agravo, normalmente é um arquivo nomeado como "agravo.pdf". Você deverá se limitar a responder somente a pergunta sem mencionar o arquivo utilizado.',
        'Quais são os fundamentos utilizados no acordão que foram apresentados pelo relator? Normalmente essa informação ficará após o relatório dentro do acordão. A informação estará localizada no arquivo do acordão, como exemplo "acordao.pdf", na parte nomeada "Acordão". Não estará localizado no arquivo do agravo, normalmente é um arquivo nomeado como "agravo.pdf". Você deverá se limitar a responder somente a pergunta sem mencionar o arquivo utilizado.',
        'Qual é a ementa do acordão? Normalmente essa informação ficará dentro do documento do acordão entitulada "Ementa". Você deverá transcrever a ementa na sua resposta.',
        'Qual foi o juízo de admissibilidade do recurso extraordinário, ou seja, se foi admitido ou denegado (inadmissão)? Além disso, quais foram os fundamentos utilizado para o juízo, ou seja, quais as razões que foram utilizados para ser adminitido ou denegado? Por exemplo, poderia ser uma matéria infraconstitucional, súmula 279 ou outros. Essa informação, normalmente, está localizada dentro do documento acordão. Esse documento poderá possuir o nome dentro do nome do arquivo, exemplo "acordao.pdf".',
        'Você deverá informar qual é o dispositivo constitucional que foi citado no recurso extraordinário? Esses dispositivos podem ser as alineas a, b, c ou d do Artigo 102 enciso III da Constitucional Federal. Essa informação, normalmente, está localizada dentro do recurso extraordinário. Esse documento poderá possuir o nome dentro do nome do arquivo, exemplo "recurso-extraordinario.pdf".',
        'Você deverá informar qual é o dispositivo constitucional que foi citado no recurso extraordinário? Esses dispositivos podem ser as alineas a, b, c ou d do Artigo 102 enciso III da Constitucional Federal. Caso seja utilizado a alinea A, quais foram os dispositivos/normas/artigos indicados como violados na Constituição? Quais foram os argumentos relevantes do recurso? Essa informação estará após ao fundamento. Pode ser que o nome do arquivo tenha uma dica do tipo do recurso, como por exemplo "agravo.pdf" ou "re.pdf".',
        'Quais os pedidos indicados pelo advogado no final do recurso extraordinario ou do agravo? Pode ser que o nome do arquivo tenha uma dica do tipo do recurso, como por exemplo "agravo.pdf" ou "re.pdf".',
        'Existem contrarrazões, ou seja, o representante da outra parte do processo apresentou argumentos contrários ao recurso extrardinário ou agravo? Essa informação normalmente está em um documento de contrarrazões ou será descrita pelo relator ou outro julgador dentro do acordão. O nome do arquivo poderá ter uma dica sobre qual documento deverá ser buscado.'
    ])

    const [inputsAnswers, setInputsAnswers] = useState([
        'Você deverá descobrir qual é o recurso desse processo. Existem somente dois tipos de recursos: Recurso extraordinário ou agravo. O recurso extraordinário é um recurso para buscar uma questão constitucional que foi citado ao longo do processo, mas que apenas pode ser resolvida pelo Supremo Tribunal Federal. O agravo questiona as razões pelas quais o recurso foi negado. Normalmente essa informação ficará no documento mais recente e após alguma frase do tipo "Interpor o Presente". Pode ser que o nome do arquivo tenha uma dica do tipo do recurso, como por exemplo "agravo.pdf" ou "re.pdf". Você deverá se limitar a responder somente se é um recurso extraordinário ou agravo, ou seja, não poderá explicar a razão da resposta ou mencionar o arquivo utilizado.',
        'Você deverá descobrir qual é a pessoa e o tribunal julgador mencionado pelo documento de agravo ou recurso extraordinário. Essa informação estará no inicio do documento e normalmente ela ficará no documento mais recente. Se esse processo for um recurso extraordinário, essa informação poderá estar no arquivo nomeado com a palavra re, como exemplo "re.pdf". No caso de um agravo, essa informação poderá estar no arquivo nomeado com a palavra agravo, como exemplo "agravo.pdf".',
        'Você deverá informar se houve uma reforma ou confirmação da decisão anterior. Normalmente a decisão anterior será citada no acordão recorrido no recurso extraordinário ou no agravo. Essa decisão, normalmente, será uma sentença. O acordão recorrido do recurso extraordinário será a decisão anterior ao recurso. No caso do agravo, será o acordão que negou o andamento do recurso. A informação estará localizada no arquivo do acordão, como exemplo "acordao.pdf", na parte nomeada "Acordão". Não estará localizado no arquivo do agravo, normalmente é um arquivo nomeado como "agravo.pdf". Você deverá se limitar a responder somente a pergunta sem mencionar o arquivo utilizado.',
        'O acórdão recorrido foi proferido por unanimidade de votos ou por maioria? A informação estará localizada no arquivo do acordão, como exemplo "acordao.pdf", na parte nomeada "Acordão". Não estará localizado no arquivo do agravo, normalmente é um arquivo nomeado como "agravo.pdf". Você deverá se limitar a responder somente a pergunta sem mencionar o arquivo utilizado.',
        'Quais são os fundamentos utilizados no acordão que foram apresentados pelo relator? Normalmente essa informação ficará após o relatório dentro do acordão. A informação estará localizada no arquivo do acordão, como exemplo "acordao.pdf", na parte nomeada "Acordão". Não estará localizado no arquivo do agravo, normalmente é um arquivo nomeado como "agravo.pdf". Você deverá se limitar a responder somente a pergunta sem mencionar o arquivo utilizado.',
        'Qual é a ementa do acordão? Normalmente essa informação ficará dentro do documento do acordão entitulada "Ementa". Você deverá transcrever a ementa na sua resposta.',
        'Qual foi o juízo de admissibilidade do recurso extraordinário, ou seja, se foi admitido ou denegado (inadmissão)? Além disso, quais foram os fundamentos utilizado para o juízo, ou seja, quais as razões que foram utilizados para ser adminitido ou denegado? Por exemplo, poderia ser uma matéria infraconstitucional, súmula 279 ou outros. Essa informação, normalmente, está localizada dentro do documento acordão. Esse documento poderá possuir o nome dentro do nome do arquivo, exemplo "acordao.pdf".',
        'Você deverá informar qual é o dispositivo constitucional que foi citado no recurso extraordinário? Esses dispositivos podem ser as alineas a, b, c ou d do Artigo 102 enciso III da Constitucional Federal. Essa informação, normalmente, está localizada dentro do recurso extraordinário. Esse documento poderá possuir o nome dentro do nome do arquivo, exemplo "recurso-extraordinario.pdf".',
        'Você deverá informar qual é o dispositivo constitucional que foi citado no recurso extraordinário? Esses dispositivos podem ser as alineas a, b, c ou d do Artigo 102 enciso III da Constitucional Federal. Caso seja utilizado a alinea A, quais foram os dispositivos/normas/artigos indicados como violados na Constituição? Quais foram os argumentos relevantes do recurso? Essa informação estará após ao fundamento. Pode ser que o nome do arquivo tenha uma dica do tipo do recurso, como por exemplo "agravo.pdf" ou "re.pdf".',
        'Quais os pedidos indicados pelo advogado no final do recurso extraordinario ou do agravo? Pode ser que o nome do arquivo tenha uma dica do tipo do recurso, como por exemplo "agravo.pdf" ou "re.pdf".',
        'Existem contrarrazões, ou seja, o representante da outra parte do processo apresentou argumentos contrários ao recurso extrardinário ou agravo? Essa informação normalmente está em um documento de contrarrazões ou será descrita pelo relator ou outro julgador dentro do acordão. O nome do arquivo poderá ter uma dica sobre qual documento deverá ser buscado.'
    ])


    
    const handleActiveEditingConfig = () => {
        setEditingEnabled(true)
    }
    const handleCancelEditingConfig = () => {
        setEditingEnabled(false)
        setInputsAnswers(answers)
    }
    const handleSaveEditingConfig = () => {
        setEditingEnabled(false)
        setAnswers(inputsAnswers)
        //salvar no banco de dados
    }



    //garantir que o tab acompanha o usuário que colocar a rota na url e não navegar por click
    useEffect(() => {
        handleChangeTabMenuContext(null, 1);
    }, [])

    return (
        <Container>
            <HeaderDiv>
                <h1>Configurações</h1>
                <HeaderButtonsDiv>
                    {!editingEnabled &&
                        <Button variant="contained" className="buttonStyle" onClick={handleActiveEditingConfig}>Editar</Button>
                    }
                    {editingEnabled &&
                        <>
                            <Button variant="outlined" className="buttonStyle" onClick={handleCancelEditingConfig}>Cancelar</Button>
                            <Button variant="contained" className="buttonStyle" onClick={handleSaveEditingConfig}>Salvar</Button>
                        </>
                    }
                </HeaderButtonsDiv>
            </HeaderDiv>





            <Content>

                {/* 1 */}
                <SectionDiv>
                    <TitleSectionDiv>
                        <TitleSection>Processo</TitleSection>
                        <SubTitleSection>Configurações do procedimento da criação do processo.</SubTitleSection>
                    </TitleSectionDiv>


                    <ContentSectionDiv>

                        <ItemContentSectionDiv>
                            <TitleItemContentSectionDiv>
                                <TitleItem>Extração dos Fragmentos</TitleItem>
                            </TitleItemContentSectionDiv>

                            <LabelItemContentSectionDiv>
                                <LabelItem>{extracaoFragmentos.toString()}</LabelItem>
                            </LabelItemContentSectionDiv>
                        </ItemContentSectionDiv>

                    </ContentSectionDiv>
                </SectionDiv>


                {/* 2 */}
                <SectionDiv>
                    <TitleSectionDiv>
                        <TitleSection>Large Language Model</TitleSection>
                        <SubTitleSection>Configurações do LLM.</SubTitleSection>
                    </TitleSectionDiv>


                    <ContentSectionDiv>

                        <ItemContentSectionDiv>
                            <TitleItemContentSectionDiv>
                                <TitleItem>Modelo</TitleItem>
                            </TitleItemContentSectionDiv>

                            <LabelItemContentSectionDiv>
                                <LabelItem>{modeloLLMS}</LabelItem>
                            </LabelItemContentSectionDiv>
                        </ItemContentSectionDiv>

                        <ItemContentSectionDiv>
                            <TitleItemContentSectionDiv>
                                <TitleItem>Context Window</TitleItem>
                            </TitleItemContentSectionDiv>

                            <LabelItemContentSectionDiv>
                                <LabelItem>{contextWindow}</LabelItem>
                            </LabelItemContentSectionDiv>
                        </ItemContentSectionDiv>

                    </ContentSectionDiv>
                </SectionDiv>



                {/* 3 */}
                <SectionDiv>
                    <TitleSectionDiv>
                        <TitleSection>Prompts das Questões</TitleSection>
                        <SubTitleSection>Cada prompt de todas as questões do sumário.</SubTitleSection>
                    </TitleSectionDiv>

                    <ContentSectionDiv>
                        {questions.map((question, index) => (
                            <ItemContentSectionDiv key={index}>
                                <TitleItemContentSectionDiv>
                                    <TitleItem>{question}</TitleItem>
                                </TitleItemContentSectionDiv>

                                <LabelItemContentSectionDiv>
                                    {!editingEnabled &&
                                        <LabelItem>{answers[index]}</LabelItem>
                                    }
                                    {editingEnabled &&
                                        <TextField
                                            id="outlined-multiline-static"
                                            label=""
                                            multiline
                                            placeholder="Digite a sua resposta"
                                            rows={8}
                                            fullWidth
                                            value={inputsAnswers[index]}
                                            onChange={(e) => {
                                                const newInputsAnswers = [...inputsAnswers];
                                                newInputsAnswers[index] = e.target.value;
                                                setInputsAnswers(newInputsAnswers);
                                            }}
                                        />
                                    }
                                </LabelItemContentSectionDiv>
                            </ItemContentSectionDiv>
                        ))}
                    </ContentSectionDiv>
                </SectionDiv>

            </Content>
        </Container>

    )
}