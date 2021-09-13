package retosSemanaTres;

public class Personaje {
	
	// Atributos
	// Asì se definen: acceso* modificador tipo* nombreVariable*
	// * quiere decir obligatorio, si no lotiene es xq es opcional
    private String nombre;
    private char sexo;
    private double posicionX;
    private double posicionY;
    private double distanciaTotal;
    private int numeroBotiquines;
    private double vida;
    
    // Constructor
    public Personaje( String nombre, char sexo ) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.vida = 100;
    }
    
    // Getters and setters
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public char getSexo() {
		return sexo;
	}
	public void setSexo(char sexo) {
		this.sexo = sexo;
	}
	public double getPosicionX() {
		return posicionX;
	}
	public void setPosicionX(double posicionX) {
		this.posicionX = posicionX;
	}
	public double getPosicionY() {
		return posicionY;
	}
	public void setPosicionY(double posicionY) {
		this.posicionY = posicionY;
	}
	public double getDistanciaTotal() {
		return distanciaTotal;
	}
	public void setDistanciaTotal(double distanciaTotal) {
		this.distanciaTotal = distanciaTotal;
	}
	public int getNumeroBotiquines() {
		return numeroBotiquines;
	}
	public void setNumeroBotiquines(int numeroBotiquines) {
		this.numeroBotiquines = numeroBotiquines;
	}
	public double getVida() {
		return vida;
	}
	public void setVida(double vida) {
		this.vida = vida;
	}

	
    // Metodos
	// Asì se definen: acceso* modificadores tipodeRetorno* NombreDelMetodo* (tipoDeArgumento argumentosRequeridos)
    public void usarBotiquin () {
        if( this.numeroBotiquines > 0 ) {
        this.numeroBotiquines --;
        this.vida += 5;
        }
    }
    public void recogerBotiquin () {
    	this.numeroBotiquines ++;
    }
    public void moverDerecha( double d ) {
        this.posicionX += d;
        this.distanciaTotal += Math.abs(d);
    }
    public void moverIzquierda( double d ) {
        this.posicionX -= d;
        this.distanciaTotal += Math.abs(d);
    }
    public void moverArriba( double d ) {
       this.posicionY += d;
       this.distanciaTotal += Math.abs(d);
    }
    public void moverAbajo( double d ) {
        this.posicionY -= d;
        this.distanciaTotal += Math.abs(d);
     }
    public double calcularDistanciaRespectoOrigen() {
        return Math.sqrt( Math.pow( this.posicionX, 2 ) + Math.pow( this.posicionY, 2 ) );
    }

    
    
 
    /* Creo un metodo para que me imprima todas las caracteristicas del personaje:
    public String toString() {
        return "Explorador: " + nombre + ", sexo: " + sexo
                + ", PosicionX: " + posicionX + ", PosicionY: " + posicionY
                + ", Distancia Total: " + distanciaTotal 
                + ", # Botiquines: " + numeroBotiquines
                + ", Vida: " + vida ;
    }*/
    
    // O se puede generar automaticmanete desde el metodo toString, para que genere una cadena de salida con todos los atributos
    // Source / Generate to string (en la misma opcion de generar getters y setters
    //(El  @Override dos linesa abajo esta indicando que se esta sobreescribiendo un metodo, en este caso uno de la clase objeto
    //(TOOOODAS las clases siemrpre seràn hijas de una clase objeto)
    @Override
	public String toString() {
		return "Personaje [nombre=" + nombre + ", sexo=" + sexo + ", posicionX=" + posicionX + ", posicionY="
				+ posicionY + ", distanciaTotal=" + distanciaTotal + ", numeroBotiquines=" + numeroBotiquines
				+ ", vida=" + vida + "]";
	}
    
    
    public static void main( String[] args ) throws Exception {
    	//Movimiento 1:
    	Personaje Explorador1 = new Personaje ("Explorador",'m');
    	Explorador1.moverDerecha(2);
    	//Explorador1.getDistanciaTotal();
        System.out.println( Explorador1 );
        
        //Movimiento 2:
        Explorador1.moverAbajo(5);
        //Explorador1.getDistanciaTotal();
        System.out.println( Explorador1 );
        
        //Movimiento 3:
        Explorador1.moverIzquierda(1);
        //Explorador1.getDistanciaTotal();
        System.out.println( Explorador1 );
        
        //Movimiento 4:
        System.out.println( "Distancia respecto del Origen: " + Explorador1.calcularDistanciaRespectoOrigen());
        System.out.println( Explorador1 );
        
        //Movimiento 5:
        Explorador1.setVida( Explorador1.getVida()- 40);
        System.out.println( "Vida Restante: " + Explorador1.getVida() );
        
        //Movimiento 6:
        Explorador1.recogerBotiquin();
        Explorador1.recogerBotiquin();
        Explorador1.recogerBotiquin();
        System.out.println( Explorador1 );
        
        //Movimiento7:
        Explorador1.usarBotiquin();
        Explorador1.usarBotiquin();
        System.out.println( Explorador1 );

	}

	
}
