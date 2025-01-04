# Assigned definitions
CC=gcc
LIBS=
LF=$(LIBS:%=-l%)

EXE=server
BIN=./bin
SRC=./src


# Generative definitions
SRCFILES=$(wildcard $(SRC)/*.c)
OBJFILES=$(SRCFILES:$(SRC)/%.c=$(BIN)/%.o)
DEPFILES=$(SRCFILES:$(SRC)/%.c=$(BIN)/%.d)


# Named tasks
.PHONE: test clean

test: $(EXE)
	./$(EXE)

clean:
	rm -rf $(BIN) $(EXE)


# File tasks
$(EXE): $(OBJFILES) | $(BIN)
	$(CC) $(OBJFILES) -o $@ $(LF)

$(BIN):
	mkdir bin


# Generative tasks
$(BIN)/%.d: $(SRC)/%.c | $(BIN)
	$(CC) $< -MM -MT $(@:.d=.o) -MF $@

$(BIN)/%.o: $(SRC)/%.c $(BIN)/%.d | $(BIN)
	$(CC) $< -c -o $@

-include $(DEPFILES)
