import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddBookArgs } from './args/addbook.args';
import { UpdateBookArgs } from './args/updatebook.args';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    public readonly bookRepo: Repository<BookEntity>,
  ) {}

  async findAllBooks(): Promise<BookEntity[]> {
    let books = await this.bookRepo.find();
    return books;
  }
  async findBookById(id: number): Promise<BookEntity> {
    let book = await this.bookRepo.findOne({ where: { id: id } });
    return book;
  }
  async deleteBook(id: number): Promise<string> {
    await this.bookRepo.delete(id);
    return 'Book has been deleted';
  }

  async addBook(addBookArgs: AddBookArgs): Promise<string> {
    let book: BookEntity = new BookEntity();
    book.title = addBookArgs.title;
    book.price = addBookArgs.price;
    await this.bookRepo.save(book);
    return 'Book has been added';
  }
  async updateBook(updateBookArgs: UpdateBookArgs): Promise<string> {
    let book: BookEntity = await this.bookRepo.findOne({
      where: { id: updateBookArgs.id },
    });
    book.title = updateBookArgs.title;
    book.price = updateBookArgs.price;
    await this.bookRepo.save(book);
    return 'Book has been updated';
  }
}
