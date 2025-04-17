import { Subject } from "rxjs";

class EventService
{
    private subject = new Subject();

    emit(eventName : string, payload : any) {
        this.subject.next(
            {
                'eventName' : eventName,
                'payload' : payload
            }
        );
    }

    listen(eventName : string, callback : (event : any) => void) {

        this.subject.asObservable().subscribe((nextObj : any) => {

            // If we get a response from an event, execute the callback
            if (eventName == nextObj['eventName'])
            {
                callback(nextObj['payload']);
            }
        });
    }
}
