import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "ola NLW !",
    })
});
app.post("/", (request, response) => {
    return response.json({ message: "usuario salvo com sucesso" })
})

app.listen(3333, () => console.log("server rodando porta 3333"));