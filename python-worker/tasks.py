from celery import Celery
import re 
import time

app = Celery('tasks',
    broker="redis://localhost",
    backend="redis://localhost"
)

@app.task
def do_heavy_task(text:str,t:int):
    time.sleep(t)
    return re.sub(r'bhargav', 'BHARGAV',text)

# run using : $ celery -A tasks worker --loglevel=INFO
