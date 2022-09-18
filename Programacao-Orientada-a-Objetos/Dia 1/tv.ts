// Sintaxe Geral

class Tv {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;
     constructor(brand: string, size: number, resolution: string, connections: string[]) {
         this._brand = brand;
         this._size = size;
         this._resolution = resolution;
         this._connections = connections;
     }
     turnOn():void {
         console.log(this._brand, this._resolution, this._size, this._connections);
     }
     get connectedTo():string | undefined {
         return this._connectedTo;
     }
     set connectedTo(newValue: string | undefined) {
         const connection = this._connections.find((e) => {
             e === newValue;
         })
         if (connection === undefined) {
             console.log('Sorry, connection unavailable!');
         }
         this._connectedTo = newValue;
         console.log(this._connectedTo);
         
     }
 }
  const object = new Tv('brand', 1, 'resolution', ['HDMI', 'Ethernet']);
  object.turnOn();
 
  object.connectedTo = 'HDMI';
  console.log('Connected to', object.connectedTo);
 