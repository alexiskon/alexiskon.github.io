from pydantic import BaseModel
from typing import Dict, Union


class JsonInputModel(BaseModel):
    target_language: str
    translate: Union[Dict, None] = None

class RawInputModel(BaseModel):
    target_language: str
    translate: str

class SimpleModel(BaseModel):
    identify: str