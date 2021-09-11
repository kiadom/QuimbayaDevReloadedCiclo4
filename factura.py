productosFacturados = int(input("Cantidad de productos a facturar: "))
productos = []
for i in range(productosFacturados):
    codProducto = int(input(f"Código de producto {i+1}: "))
    productos.append(codProducto)
    nomProducto = str(input(f"Nombre del producto {i+1}: "))
    productos.append(nomProducto)
    precioUnitarioConIva = float(input(f"Precio unitario con IVA {i+1}: "))
    productos.append(precioUnitarioConIva)
    cantidad = int(input("Cantidad: "))
    productos.append(cantidad)
    porcentajeIva = int(input("Porcentaje del IVA: "))
    productos.append(porcentajeIva)

print()
print("COD.    PROD.    Vr. TOTAL    CANT.  IVA")
for i in range(0, len(productos), 5):
    print(*productos[i:(5+i)], sep="    ")

total = 0
subtotal = 0
valorIva = 0
for i in range(2, len(productos), 5):
    total += productos[i]*(productos[i+1])
    subtotal += productos[i]*(productos[i+1]) / (1+(productos[i+2]/100))
    valorIva += (productos[i]*(productos[i+1]))-(productos[i]*(productos[i+1]) / (1+(productos[i+2]/100)))

print()
print(f"Total: {total:,.0f}")
print(f"Subtotal: {subtotal:,.0f}")
print(f"IVA: {valorIva:,.0f}")