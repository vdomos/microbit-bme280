basic.showString("I")
BME280.PowerOn()
BME280.Address(BME280_I2C_ADDRESS.ADDR_0x76)
basic.pause(1000)
basic.forever(function () {
    basic.showString("S")
    serial.writeNumber(BME280.temperature(BME280_T.T_C))
    serial.writeLine("")
    serial.writeNumber(BME280.pressure(BME280_P.Pa))
    serial.writeLine("")
    basic.pause(1000)
    basic.showString("P")
    basic.pause(5000)
})
