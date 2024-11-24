from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class Item(BaseModel):
    id:int
    content:str

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

toDoList = []

@app.get("/toDos")
async def read_root():
    return toDoList

@app.post("/items/")
async def create_toDo(item:Item):
    toDoList.append(item)
    return item

@app.get("/toDos/{item_id}")
async def read_items(item_id:int):
    for item in toDoList:
        if item.id == item_id:
            return item

@app.get("/toDos/")
async def read_item(item_id:int):
    for item in toDoList:
        if item.id == item_id:
            return item


@app.delete("/toDos/{item_id}")
async def delete_item(item_id:int):
     for index, item in enumerate(toDoList):
        if item.id == item_id:
            del toDoList[index]
            return item
