import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './entities/quote.entity';

@Injectable()
export class QuoteService {
  private quotes: Quote[] = []; // Simulación para test de base de datos en memoria

  create(createQuoteDto: CreateQuoteDto): Quote {
    const rate = this.getRate(createQuoteDto.from, createQuoteDto.to); // test de tasa de conversión
    const convertedAmount = createQuoteDto.amount * rate;

    const quote: Quote = {
      id: Math.random().toString(36).substring(7), // ID único simple
      ...createQuoteDto,
      rate,
      convertedAmount,
      timestamp: new Date(),
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // Expira en 5 minutos
    };

    this.quotes.push(quote); // Guardar en "base de datos"
    return quote;
  }

  findOne(id: string): Quote {
    return this.quotes.find((quote) => quote.id === id);
  }

  private getRate(from: string, to: string): number {
    // Simulación de una tasa de conversión fija
    const rates = {
      ARS: { ETH: 0.0000023, USD: 0.001 },
      ETH: { ARS: 434782.61, USD: 3000 },
    };
    return rates[from]?.[to] || 1;
  }
}