from fastapi import FastAPI, Request
from typing import Any, Dict, AnyStr, List, Union
from fastapi.middleware.cors import CORSMiddleware

from inputClass import JsonInputModel, RawInputModel, SimpleModel
from easyNMT import Translator

app = FastAPI()
translator = Translator()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["root"])
async def root():
    return {"response": "Translator!"}

@app.post("/services/speech2text", tags=["services"])
async def speech_to_text(request: Request):

    print(request)
    print(type(request))
    return True

@app.post("/services/translate/json", tags=["services"])
async def translate(arbitrary_json: JsonInputModel):

    supported_target_languages = ["el", "es", "de", "fr"]

    if arbitrary_json.target_language not in supported_target_languages:
        return {"Unsupported target language ... Please choose between [gr, sp, de, fr]"}

    for key, value in arbitrary_json.translate.items():

        translator.translation(
            arbitrary_json.target_language, arbitrary_json.translate[key]
        )
        arbitrary_json.translate[key] = translator.sent

    response_json = {"translations": arbitrary_json.translate,}

    return response_json

@app.post("/services/translate/text", tags=["services"])
async def translate(arbitrary_text: RawInputModel):

    supported_target_languages = ["el", "es", "de", "fr"]

    if arbitrary_text.target_language not in supported_target_languages:
        return {"Unsupported target language ... Please choose between [gr, sp, de, fr]"}

    translator.translation(arbitrary_text.target_language, arbitrary_text.translate)

    response_json = {"translations": translator.sent}

    return response_json

@app.post("/services/identify", tags=["services"])
async def identify(arbitrary_text: SimpleModel):

    translator.identification(arbitrary_text.identify)
    
    response_json = {"language": translator.lang}

    return response_json
