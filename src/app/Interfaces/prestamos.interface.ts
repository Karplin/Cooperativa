export interface datos {
    success:          boolean;
    forceLogin:       boolean;
    mensaje:          string;
    data:             Data;
    debug:            any[];
    anuncion_general: string;
  }
  
  export interface Data {
    ultimo_acceso: string;
    cuentas:       Cuenta[];
    prestamos:     Prestamo[];
  }
  
  export interface Cuenta {
    idcuenta:           string;
    tipo:               string;
    balance_disponible: string;
    monto_ult_deposito: string;
    monto_ult_retiro:   string;
  }
  
  export interface Prestamo {
    idoficina_principal:     string;
    idprestamo:              string;
    idcliente:               string;
    idtipo_prestamo:         string;
    monto_prestamo:          string;
    tasa_interes:            string;
    fecha_prestamo:          string;
    fecha_desembolso:        string;
    plazo:                   string;
    idsector_economico:      string;
    fecha_vencimiento:       string;
    monto_seguro_pagado:     string;
    fecha_ultimo_calculo:    string;
    monto_interes_calculado: string;
    monto_intereses_fin_mes: string;
    monto_pago_anticipado:   string;
    valor_cuota:             string;
    consecutivo_cuota:       string;
    balance_corte:           string;
    balance_prestamo:        string;
    descripcion:             string;
    act:                     string;
  }
  
  
  
  
  
  