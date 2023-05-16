import io
import numpy as np
from PIL import Image
from fastapi import FastAPI, File, UploadFile
from keras.models import load_model

app = FastAPI()

model_path = 'model/prototype_model.h5'
model = load_model(model_path)
class_labels = ['BlackNegraCollena', 'Hvalhvas', 'Ilpainia', 'Inia431Altpleno', 'IniaSantaAna', 'Kankolla', 'RedRojo', 'Salcedo', 'YellowAmarilloDemorongoni', 'YellowArmerilloSecaco']

def predict(image):
    img = Image.open(io.BytesIO(image)).convert('RGB')
    img = img.resize((224, 224))
    img = np.asarray(img)
    img = np.expand_dims(img, axis=0)
    img = img/255.0
    pred = model.predict(img)
    result = class_labels[np.argmax(pred)]
    return result

@app.post("/predict")
async def predict_image(image: UploadFile = File(...)):
    contents = await image.read()
    return predict(contents)
