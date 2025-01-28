// Centralized instruction database
const instructionDatabase = {
  'ACI_DATA': {
    opcode: 'CE',
    description: 'Adds immediate data to the accumulator with carry.',
    flowchart: `Start\n↓\nRead immediate data\n↓\nAdd with accumulator and carry\n↓\nStore result in accumulator\n↓\nEnd`,
    keyPoints: [
      'Two-byte instruction',
      "Affects all flags based on the result",
      'Takes 7 T-states',
      'Immediate to accumulator addition'
    ],
    examples: ['Before: A=20H, Carry=1, Data=35H', 'After:  A=56H']
  },

  'ADC_A': {
    opcode: '8F',
    description: 'Adds the content of register A and carry to the accumulator.',
    flowchart: `Start\n↓\nRead A register\n↓\nAdd with accumulator and carry\n↓\nStore result in accumulator\n↓\nEnd`,
    keyPoints: [
      'Single-byte instruction',
      "Affects all flags based on the result",
      'Takes 4 T-states',
      'Register to accumulator addition with carry'
    ],
    examples: ['Before: A=20H, Carry=1', 'After:  A=21H']
  },

  'ADC_B': {
    opcode: '88',
    description: 'Adds the content of register B and carry to the accumulator.',
    flowchart: `Start\n↓\nRead B register\n↓\nAdd with accumulator and carry\n↓\nStore result in accumulator\n↓\nEnd`,
    keyPoints: [
      'Single-byte instruction',
      "Affects all flags based on the result",
      'Takes 4 T-states',
      'Register to accumulator addition with carry'
    ],
    examples: ['Before: A=20H, B=15H, Carry=1', 'After:  A=36H']
  },

  'ADC_C': {
    opcode: '89',
    description: 'Adds the content of register C and carry to the accumulator.',
    flowchart: `Start\n↓\nRead C register\n↓\nAdd with accumulator and carry\n↓\nStore result in accumulator\n↓\nEnd`,
    keyPoints: [
      'Single-byte instruction',
      "Affects all flags based on the result",
      'Takes 4 T-states',
      'Register to accumulator addition with carry'
    ],
    examples: ['Before: A=20H, C=10H, Carry=0', 'After:  A=30H']
  },

  'ADC_D': {
    opcode: '8A',
    description: 'Adds the content of register D and carry to the accumulator.',
    flowchart: `Start\n↓\nRead D register\n↓\nAdd with accumulator and carry\n↓\nStore result in accumulator\n↓\nEnd`,
    keyPoints: [
      'Single-byte instruction',
      "Affects all flags based on the result",
      'Takes 4 T-states',
      'Register to accumulator addition with carry'
    ],
    examples: ['Before: A=20H, D=05H, Carry=1', 'After:  A=26H']
  },

  'ADC_E': {
    opcode: '8B',
    description: 'Adds the content of register E and carry to the accumulator.',
    flowchart: `Start\n↓\nRead E register\n↓\nAdd with accumulator and carry\n↓\nStore result in accumulator\n↓\nEnd`,
    keyPoints: [
      'Single-byte instruction',
      "Affects all flags based on the result",
      'Takes 4 T-states',
      'Register to accumulator addition with carry'
    ],
    examples: ['Before: A=20H, E=10H, Carry=0', 'After:  A=30H']
  },

  'ADC_H': {
    opcode: '8C',
    description: 'Adds the content of register H and carry to the accumulator.',
    flowchart: `Start\n↓\nRead H register\n↓\nAdd with accumulator and carry\n↓\nStore result in accumulator\n↓\nEnd`,
    keyPoints: [
      'Single-byte instruction',
      "Affects all flags based on the result",
      'Takes 4 T-states',
      'Register to accumulator addition with carry'
    ],
    examples: ['Before: A=20H, H=08H, Carry=1', 'After:  A=29H']
  },

  'ADC_L': {
    opcode: '8D',
    description: 'Adds the content of register L and carry to the accumulator.',
    flowchart: `Start\n↓\nRead L register\n↓\nAdd with accumulator and carry\n↓\nStore result in accumulator\n↓\nEnd`,
    keyPoints: [
      'Single-byte instruction',
      "Affects all flags based on the result",
      'Takes 4 T-states',
      'Register to accumulator addition with carry'
    ],
    examples: ['Before: A=20H, L=12H, Carry=0', 'After:  A=32H']
  },

  'ADC_M': {
    opcode: '8E',
    description: 'Adds the content of the memory location pointed by HL and carry to the accumulator.',
    flowchart: `Start\n↓\nRead memory (HL)\n↓\nAdd with accumulator and carry\n↓\nStore result in accumulator\n↓\nEnd`,
    keyPoints: [
      'Single-byte instruction',
      "Affects all flags based on the result",
      'Takes 7 T-states',
      'Memory to accumulator addition with carry'
    ],
    examples: ['Before: A=20H, (HL)=15H, Carry=1', 'After:  A=36H']
  },

  'ADD_A': {
    opcode: '87',
    description: 'Adds the content of register A to the accumulator.',
    flowchart: `Start\n↓\nRead A register\n↓\nAdd with accumulator\n↓\nStore result in accumulator\n↓\nEnd`,
    keyPoints: [
      'Single-byte instruction',
      "Affects all flags based on the result",
      'Takes 4 T-states',
      'Register to accumulator addition'
    ],
    examples: ['Before: A=20H', 'After:  A=40H']
  },

  'ADD_B': {
    opcode: '80',
    description: 'Add register B to accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead B register\n↓\nAdd A+B\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'Register to register addition'
    ],
    examples: ['Before: A=25H, B=30H', 'After:  A=55H, B=30H']
  },

  'ADD_C': {
    opcode: '81',
    description: 'Add register C to accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead C register\n↓\nAdd A+C\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'Register to register addition'
    ],
    examples: ['Before: A=25H, C=30H', 'After:  A=55H, C=30H']
  },

  'ADD_D': {
    opcode: '82',
    description: 'Add register D to accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead D register\n↓\nAdd A+D\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'Register to register addition'
    ],
    examples: ['Before: A=25H, D=30H', 'After:  A=55H, D=30H']
  },

  'ADD_E': {
    opcode: '83',
    description: 'Add register E to accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead E register\n↓\nAdd A+E\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'Register to register addition'
    ],
    examples: ['Before: A=25H, E=30H', 'After:  A=55H, E=30H']
  },

  'ADD_H': {
    opcode: '84',
    description: 'Add register H to accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead H register\n↓\nAdd A+H\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'Register to register addition'
    ],
    examples: ['Before: A=25H, H=30H', 'After:  A=55H, H=30H']
  },

  'ADD_L': {
    opcode: '85',
    description: 'Add register L to accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead L register\n↓\nAdd A+L\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'Register to register addition'
    ],
    examples: ['Before: A=25H, L=30H', 'After:  A=55H, L=30H']
  },
  // 17. ADD M 86 1 // 18. ADI Data C6 2 // 19. ANA A A7 1 
  'ADD_M': {
    opcode: '86',
    description: 'Add memory content to accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nGet memory address from H-L pair\n↓\nRead memory content\n↓\nAdd to A\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Memory to accumulator addition',
      'Affects all flags',
      'Takes 7 T-states',
      'Uses address from H-L pair'
    ],
    examples: ['Before: A=25H, M=30H', 'After:  A=55H, M=30H']
  },
  
  'ADI_DATA': {
    opcode: 'C6',
    description: 'Add immediate data to accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead immediate data\n↓\nAdd A + data\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Two byte instruction',
      'Immediate addressing mode',
      'Affects all flags',
      'Takes 7 T-states',
      'Second byte contains data'
    ],
    examples: ['Before: A=25H, Data=30H', 'After:  A=55H']
  },
  
  'ANA_A': {
    opcode: 'A7',
    description: 'Logical AND of accumulator with itself. Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nAND A with A\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects CY, S, P, Z flags',
      'Takes 4 T-states',
      'CY and AC flags are reset'
    ],
    examples: ['Before: A=25H', 'After:  A=25H (unchanged)']
  },

  'ANA_B': {
    opcode: 'A0',
    description: 'Logical AND of accumulator with register B. Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead B register\n↓\nAND A with B\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'Register to register logical AND'
    ],
    examples: ['Before: A=F5H, B=0FH', 'After:  A=05H, B=0FH']
  },

  'ANA_C': {
    opcode: 'A1',
    description: 'Logical AND of register C with accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead C register\n↓\nAND A with C\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects CY, S, P, Z flags',
      'Takes 4 T-states',
      'CY and AC flags are reset'
    ],
    examples: ['Before: A=25H, C=30H', 'After:  A=20H, C=30H']
  },

  'ANA_D': {
    opcode: 'A2',
    description: 'Logical AND of register D with accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead D register\n↓\nAND A with D\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects CY, S, P, Z flags',
      'Takes 4 T-states',
      'CY and AC flags are reset'
    ],
    examples: ['Before: A=25H, D=30H', 'After:  A=20H, D=30H']
  },

  'ANA_E': {
    opcode: 'A3',
    description: 'Logical AND of register E with accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead E register\n↓\nAND A with E\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects CY, S, P, Z flags',
      'Takes 4 T-states',
      'CY and AC flags are reset'
    ],
    examples: ['Before: A=25H, E=30H', 'After:  A=20H, E=30H']
  },

  'ANA_H': {
    opcode: 'A4',
    description: 'Logical AND of register H with accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead H register\n↓\nAND A with H\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects CY, S, P, Z flags',
      'Takes 4 T-states',
      'CY and AC flags are reset'
    ],
    examples: ['Before: A=25H, H=30H', 'After:  A=20H, H=30H']
  },

  'ANA_L': {
    opcode: 'A5',
    description: 'Logical AND of register L with accumulator (A). Result stored in A',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead L register\n↓\nAND A with L\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects CY, S, P, Z flags',
      'Takes 4 T-states',
      'CY and AC flags are reset'
    ],
    examples: ['Before: A=25H, L=30H', 'After:  A=20H, L=30H']
  },

  'ANA_M': {
    opcode: 'A6',
    description: 'Performs a logical AND operation between accumulator and the memory location pointed by HL register pair.',
    flowchart: `Start\n↓\nRead memory location (HL)\n↓\nLogical AND with A\n↓\nStore in A\n↓\nEnd`,
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 7 T-states',
      'Memory to accumulator logical AND'
    ],
    examples: ['Before: A=F5H, (HL)=0FH', 'After:  A=05H']
  },
  'CALL_LABEL': {
    opcode: 'CD',
    description: 'Unconditional subroutine call to specified address',
    flowchart: 'Start\n↓\nPush PC onto stack\n↓\nLoad address from bytes 2&3\n↓\nJump to new address\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 18 T-states',
      'Stores return address on stack'
    ],
    examples: ['Before: PC=2050H, SP=2100H', 'After:  PC=Label address, SP=20FEH']
  },

  'CC_LABEL': {
    opcode: 'DC',
    description: 'Call if carry flag is set (CY=1)',
    flowchart: 'Start\n↓\nCheck CY flag\n↓\nIf CY=1: Push PC & Jump\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 18/9 T-states (call/no call)',
      'Conditional subroutine call'
    ],
    examples: ['Before: CY=1, PC=2050H', 'After:  PC=Label address']
  },

  'CM_LABEL': {
    opcode: 'FC',
    description: 'Call if minus/negative (S=1)',
    flowchart: 'Start\n↓\nCheck S flag\n↓\nIf S=1: Push PC & Jump\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 18/9 T-states (call/no call)',
      'Conditional subroutine call'
    ],
    examples: ['Before: S=1, PC=2050H', 'After:  PC=Label address']
  },

  'CMA': {
    opcode: '2F',
    description: 'Complement accumulator (1\'s complement)',
    flowchart: 'Start\n↓\nRead A register\n↓\nInvert all bits\n↓\nStore in A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Inverts each bit in A'
    ],
    examples: ['Before: A=5AH', 'After:  A=A5H']
  },

  'CMC': {
    opcode: '3F',
    description: 'Complement carry flag',
    flowchart: 'Start\n↓\nRead CY flag\n↓\nInvert CY\n↓\nStore new CY\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Only affects CY flag',
      'Takes 4 T-states',
      'Inverts carry flag'
    ],
    examples: ['Before: CY=1', 'After:  CY=0']
  },

  'CMP_A': {
    opcode: 'BF',
    description: 'Compare A with itself',
    flowchart: 'Start\n↓\nRead A register\n↓\nSubtract A from A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'Always sets Z=1'
    ],
    examples: ['Before: A=25H', 'After:  Z=1, A unchanged']
  },

  'CMP_B': {
    opcode: 'B8',
    description: 'Compare B with A',
    flowchart: 'Start\n↓\nRead A,B registers\n↓\nSubtract B from A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'No result stored'
    ],
    examples: ['Before: A=25H, B=20H', 'After:  CY=0, Z=0, registers unchanged']
  },

  'CMP_C': {
    opcode: 'B9',
    description: 'Compare C with A',
    flowchart: 'Start\n↓\nRead A,C registers\n↓\nSubtract C from A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'No result stored'
    ],
    examples: ['Before: A=25H, C=20H', 'After:  CY=0, Z=0, registers unchanged']
  },
  'CMP_D': {
    opcode: 'BA',
    description: 'Compare A with D. Subtracts D from A without storing result',
    flowchart: 'Start\n↓\nRead A and D registers\n↓\nCompare A-D\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects flags only',
      'Takes 4 T-states',
      'Register comparison'
    ],
    examples: ['Before: A=25H, D=20H', 'After:  A=25H, D=20H, flags set']
  },
  'CMP_E': {
    opcode: 'BB',
    description: 'Compare E with A',
    flowchart: 'Start\n↓\nRead A,E registers\n↓\nSubtract E from A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'No result stored'
    ],
    examples: ['Before: A=25H, E=20H', 'After:  CY=0, Z=0, registers unchanged']
  },

  'CMP_H': {
    opcode: 'BC',
    description: 'Compare H with A',
    flowchart: 'Start\n↓\nRead A,H registers\n↓\nSubtract H from A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'No result stored'
    ],
    examples: ['Before: A=25H, H=20H', 'After:  CY=0, Z=0, registers unchanged']
  },

  'CMP_L': {
    opcode: 'BD',
    description: 'Compare L with A',
    flowchart: 'Start\n↓\nRead A,L registers\n↓\nSubtract L from A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'No result stored'
    ],
    examples: ['Before: A=25H, L=20H', 'After:  CY=0, Z=0, registers unchanged']
  },

  'CMP_M': {
    opcode: 'BE',
    description: 'Compare memory content with A',
    flowchart: 'Start\n↓\nRead A register\n↓\nGet memory from H-L pair\n↓\nSubtract memory from A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 7 T-states',
      'No result stored'
    ],
    examples: ['Before: A=25H, M=20H', 'After:  CY=0, Z=0, contents unchanged']
  },

  'CNC_LABEL': {
    opcode: 'D4',
    description: 'Call if no carry (CY=0)',
    flowchart: 'Start\n↓\nCheck CY flag\n↓\nIf CY=0: Push PC & Jump\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 18/9 T-states (call/no call)',
      'Conditional subroutine call'
    ],
    examples: ['Before: CY=0, PC=2050H', 'After:  PC=Label address']
  },

  'CNZ_LABEL': {
    opcode: 'C4',
    description: 'Call if not zero (Z=0)',
    flowchart: 'Start\n↓\nCheck Z flag\n↓\nIf Z=0: Push PC & Jump\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 18/9 T-states (call/no call)',
      'Conditional subroutine call'
    ],
    examples: ['Before: Z=0, PC=2050H', 'After:  PC=Label address']
  },

  'CP_LABEL': {
    opcode: 'F4',
    description: 'Call if positive (S=0)',
    flowchart: 'Start\n↓\nCheck S flag\n↓\nIf S=0: Push PC & Jump\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 18/9 T-states (call/no call)',
      'Conditional subroutine call'
    ],
    examples: ['Before: S=0, PC=2050H', 'After:  PC=Label address']
  },

  'CPE_LABEL': {
    opcode: 'EC',
    description: 'Call if parity even (P=1)',
    flowchart: 'Start\n↓\nCheck P flag\n↓\nIf P=1: Push PC & Jump\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 18/9 T-states (call/no call)',
      'Conditional subroutine call'
    ],
    examples: ['Before: P=1, PC=2050H', 'After:  PC=Label address']
  },
  'CPI': {
    opcode: 'FE',
    description: 'Compare immediate with A. Subtracts immediate data from A without storing result',
    flowchart: 'Start\n↓\nRead A register\n↓\nRead immediate data\n↓\nCompare A-data\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Two byte instruction',
      'Affects flags only',
      'Takes 7 T-states',
      'Immediate data comparison'
    ],
    examples: ['Before: A=25H, Data=20H', 'After:  A=25H, flags set']
  },

    'CPO_LABEL': {
    opcode: 'E4',
    description: 'Call if parity odd (P=0)',
    flowchart: 'Start\n↓\nCheck P flag\n↓\nIf P=0: Push PC & Jump\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 18/9 T-states (call/no call)',
      'Conditional subroutine call'
    ],
    examples: ['Before: P=0, PC=2050H', 'After:  PC=Label address']
  },

  'CZ_LABEL': {
    opcode: 'CC',
    description: 'Call if zero (Z=1)',
    flowchart: 'Start\n↓\nCheck Z flag\n↓\nIf Z=1: Push PC & Jump\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 18/9 T-states (call/no call)',
      'Conditional subroutine call'
    ],
    examples: ['Before: Z=1, PC=2050H', 'After:  PC=Label address']
  },

  'DAA': {
    opcode: '27',
    description: 'Decimal Adjust Accumulator',
    flowchart: 'Start\n↓\nRead A register\n↓\nAdjust for BCD\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects all flags',
      'Takes 4 T-states',
      'Converts binary result to BCD'
    ],
    examples: ['Before: A=9BH', 'After:  A=01H, CY=1']
  },

  'DAD_B': {
    opcode: '09',
    description: 'Add B-C register pair to H-L register pair',
    flowchart: 'Start\n↓\nRead H-L pair\n↓\nRead B-C pair\n↓\nAdd pairs\n↓\nStore in H-L\n↓\nSet CY flag\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Only affects CY flag',
      'Takes 10 T-states',
      '16-bit addition'
    ],
    examples: ['Before: HL=2550H, BC=1000H', 'After:  HL=3550H']
  },

  'DAD_D': {
    opcode: '19',
    description: 'Add D-E register pair to H-L register pair',
    flowchart: 'Start\n↓\nRead H-L pair\n↓\nRead D-E pair\n↓\nAdd pairs\n↓\nStore in H-L\n↓\nSet CY flag\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Only affects CY flag',
      'Takes 10 T-states',
      '16-bit addition'
    ],
    examples: ['Before: HL=2550H, DE=1000H', 'After:  HL=3550H']
  },

  'DAD_H': {
    opcode: '29',
    description: 'Add H-L register pair to itself',
    flowchart: 'Start\n↓\nRead H-L pair\n↓\nAdd H-L to itself\n↓\nStore in H-L\n↓\nSet CY flag\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Only affects CY flag',
      'Takes 10 T-states',
      'Effectively multiplies HL by 2'
    ],
    examples: ['Before: HL=2550H', 'After:  HL=4AA0H']
  },

  'DAD_SP': {
    opcode: '39',
    description: 'Add Stack Pointer to H-L register pair',
    flowchart: 'Start\n↓\nRead H-L pair\n↓\nRead SP\n↓\nAdd values\n↓\nStore in H-L\n↓\nSet CY flag\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Only affects CY flag',
      'Takes 10 T-states',
      '16-bit addition with SP'
    ],
    examples: ['Before: HL=2550H, SP=1000H', 'After:  HL=3550H']
  },

  'DCR_A': {
    opcode: '3D',
    description: 'Decrement accumulator by 1',
    flowchart: 'Start\n↓\nRead A register\n↓\nSubtract 1\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: A=21H', 'After:  A=20H']
  },

  'DCR_B': {
    opcode: '05',
    description: 'Decrement register B by 1',
    flowchart: 'Start\n↓\nRead B register\n↓\nSubtract 1\n↓\nStore in B\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: B=21H', 'After:  B=20H']
  },

  'DCR_C': {
    opcode: '0D',
    description: 'Decrement register C by 1',
    flowchart: 'Start\n↓\nRead C register\n↓\nSubtract 1\n↓\nStore in C\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: C=21H', 'After:  C=20H']
  },

  'DCR_D': {
    opcode: '15',
    description: 'Decrement register D by 1',
    flowchart: 'Start\n↓\nRead D register\n↓\nSubtract 1\n↓\nStore in D\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: D=21H', 'After:  D=20H']
  },

  'DCR_E': {
    opcode: '1D',
    description: 'Decrement register E by 1',
    flowchart: 'Start\n↓\nRead E register\n↓\nSubtract 1\n↓\nStore in E\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: E=21H', 'After:  E=20H']
  },

  'DCR_H': {
    opcode: '25',
    description: 'Decrement register H by 1',
    flowchart: 'Start\n↓\nRead H register\n↓\nSubtract 1\n↓\nStore in H\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: H=21H', 'After:  H=20H']
  },

  'DCR_L': {
    opcode: '2D',
    description: 'Decrement register L by 1',
    flowchart: 'Start\n↓\nRead L register\n↓\nSubtract 1\n↓\nStore in L\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: L=21H', 'After:  L=20H']
  },

  'DCR_M': {
    opcode: '35',
    description: 'Decrement memory content by 1',
    flowchart: 'Start\n↓\nGet memory address from H-L\n↓\nRead memory\n↓\nSubtract 1\n↓\nStore back to memory\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 10 T-states',
      'Memory operation'
    ],
    examples: ['Before: M=21H', 'After:  M=20H']
  },

  'DCX_B': {
    opcode: '0B',
    description: 'Decrement B-C register pair by 1',
    flowchart: 'Start\n↓\nRead B-C pair\n↓\nSubtract 1\n↓\nStore back in B-C\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 5 T-states',
      '16-bit decrement'
    ],
    examples: ['Before: BC=2001H', 'After:  BC=2000H']
  },

  'DCX_D': {
    opcode: '1B',
    description: 'Decrement D-E register pair by 1',
    flowchart: 'Start\n↓\nRead D-E pair\n↓\nSubtract 1\n↓\nStore back in D-E\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 5 T-states',
      '16-bit decrement'
    ],
    examples: ['Before: DE=2001H', 'After:  DE=2000H']
  },

  'DCX_H': {
    opcode: '2B',
    description: 'Decrement H-L register pair by 1',
    flowchart: 'Start\n↓\nRead H-L pair\n↓\nSubtract 1\n↓\nStore back in H-L\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 5 T-states',
      '16-bit decrement'
    ],
    examples: ['Before: HL=2001H', 'After:  HL=2000H']
  },

  'DCX_SP': {
    opcode: '3B',
    description: 'Decrement Stack Pointer by 1',
    flowchart: 'Start\n↓\nRead SP\n↓\nSubtract 1\n↓\nStore back in SP\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 5 T-states',
      '16-bit SP decrement'
    ],
    examples: ['Before: SP=2001H', 'After:  SP=2000H']
  },

  'DI': {
    opcode: 'F3',
    description: 'Disable Interrupts',
    flowchart: 'Start\n↓\nDisable interrupt system\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Disables maskable interrupts'
    ],
    examples: ['Effect: Interrupts disabled until EI executed']
  },

  'EI': {
    opcode: 'FB',
    description: 'Enable Interrupts',
    flowchart: 'Start\n↓\nEnable interrupt system\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Enables maskable interrupts'
    ],
    examples: ['Effect: Interrupts enabled after execution']
  },

  'HLT': {
    opcode: '76',
    description: 'Halt processor operation',
    flowchart: 'Start\n↓\nStop operation\n↓\nWait for interrupt\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 7 T-states',
      'Processor enters halt state'
    ],
    examples: ['Effect: Processor halts until interrupt or reset']
  },

  'IN_PORT': {
    opcode: 'DB',
    description: 'Input data from specified port to accumulator',
    flowchart: 'Start\n↓\nRead port address\n↓\nGet data from port\n↓\nStore in A\n↓\nEnd',
    keyPoints: [
      'Two byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Second byte is port address'
    ],
    examples: ['Before: Port 01H contains 55H', 'After:  A=55H']
  },

  'INR_A': {
    opcode: '3C',
    description: 'Increment accumulator by 1',
    flowchart: 'Start\n↓\nRead A register\n↓\nAdd 1\n↓\nStore in A\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: A=20H', 'After:  A=21H']
  },

  'INR_B': {
    opcode: '04',
    description: 'Increment register B by 1',
    flowchart: 'Start\n↓\nRead B register\n↓\nAdd 1\n↓\nStore in B\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: B=20H', 'After:  B=21H']
  },
  'INR_C': {
    opcode: '0C',
    description: 'Increment register C by 1',
    flowchart: 'Start\n↓\nRead C register\n↓\nAdd 1\n↓\nStore in C\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: C=20H', 'After:  C=21H']
  },

  'INR_D': {
    opcode: '14',
    description: 'Increment register D by 1',
    flowchart: 'Start\n↓\nRead D register\n↓\nAdd 1\n↓\nStore in D\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: D=20H', 'After:  D=21H']
  },

  'INR_E': {
    opcode: '1C',
    description: 'Increment register E by 1',
    flowchart: 'Start\n↓\nRead E register\n↓\nAdd 1\n↓\nStore in E\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: E=20H', 'After:  E=21H']
  },

  'INR_H': {
    opcode: '24',
    description: 'Increment register H by 1',
    flowchart: 'Start\n↓\nRead H register\n↓\nAdd 1\n↓\nStore in H\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: H=20H', 'After:  H=21H']
  },

  'INR_L': {
    opcode: '2C',
    description: 'Increment register L by 1',
    flowchart: 'Start\n↓\nRead L register\n↓\nAdd 1\n↓\nStore in L\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 4 T-states',
      'CY flag not affected'
    ],
    examples: ['Before: L=20H', 'After:  L=21H']
  },

  'INR_M': {
    opcode: '34',
    description: 'Increment memory content by 1',
    flowchart: 'Start\n↓\nGet memory address from H-L\n↓\nRead memory\n↓\nAdd 1\n↓\nStore back to memory\n↓\nSet flags\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'Affects S, Z, P flags',
      'Takes 10 T-states',
      'Memory operation'
    ],
    examples: ['Before: M=20H', 'After:  M=21H']
  },

  'INX_B': {
    opcode: '03',
    description: 'Increment B-C register pair by 1',
    flowchart: 'Start\n↓\nRead B-C pair\n↓\nAdd 1\n↓\nStore back in B-C\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 5 T-states',
      '16-bit increment'
    ],
    examples: ['Before: BC=2000H', 'After:  BC=2001H']
  },

  'INX_D': {
    opcode: '13',
    description: 'Increment D-E register pair by 1',
    flowchart: 'Start\n↓\nRead D-E pair\n↓\nAdd 1\n↓\nStore back in D-E\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 5 T-states',
      '16-bit increment'
    ],
    examples: ['Before: DE=2000H', 'After:  DE=2001H']
  },

  'INX_H': {
    opcode: '23',
    description: 'Increment H-L register pair by 1',
    flowchart: 'Start\n↓\nRead H-L pair\n↓\nAdd 1\n↓\nStore back in H-L\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 5 T-states',
      '16-bit increment'
    ],
    examples: ['Before: HL=2000H', 'After:  HL=2001H']
  },

  'INX_SP': {
    opcode: '33',
    description: 'Increment Stack Pointer by 1',
    flowchart: 'Start\n↓\nRead SP\n↓\nAdd 1\n↓\nStore back in SP\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 5 T-states',
      '16-bit SP increment'
    ],
    examples: ['Before: SP=2000H', 'After:  SP=2001H']
  },
  'JC_LABEL': {
    opcode: 'DA',
    description: 'Jump if carry flag is set (CY=1)',
    flowchart: 'Start\n↓\nCheck CY flag\n↓\nIf CY=1: Jump to address\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Conditional jump'
    ],
    examples: ['Before: CY=1, PC=2050H', 'After:  PC=Label address']
  },
  'JM_LABEL': {
    opcode: 'FA',
    description: 'Jump if result is minus (S=1)',
    flowchart: 'Start\n↓\nCheck S flag\n↓\nIf S=1: Jump to address\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Conditional jump'
    ],
    examples: ['Before: S=1, PC=2050H', 'After:  PC=Label address']
  },

  'JMP_LABEL': {
    opcode: 'C3',
    description: 'Unconditional jump to specified address',
    flowchart: 'Start\n↓\nRead address\n↓\nJump to address\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Always jumps'
    ],
    examples: ['Before: PC=2050H', 'After:  PC=Label address']
  },

  'JNC_LABEL': {
    opcode: 'D2',
    description: 'Jump if no carry (CY=0)',
    flowchart: 'Start\n↓\nCheck CY flag\n↓\nIf CY=0: Jump to address\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Conditional jump'
    ],
    examples: ['Before: CY=0, PC=2050H', 'After:  PC=Label address']
  },

  'JNZ_LABEL': {
    opcode: 'C2',
    description: 'Jump if not zero (Z=0)',
    flowchart: 'Start\n↓\nCheck Z flag\n↓\nIf Z=0: Jump to address\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Conditional jump'
    ],
    examples: ['Before: Z=0, PC=2050H', 'After:  PC=Label address']
  },

  'JP_LABEL': {
    opcode: 'F2',
    description: 'Jump if result is plus (S=0)',
    flowchart: 'Start\n↓\nCheck S flag\n↓\nIf S=0: Jump to address\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Conditional jump'
    ],
    examples: ['Before: S=0, PC=2050H', 'After:  PC=Label address']
  },

  'JPE_LABEL': {
    opcode: 'EA',
    description: 'Jump if parity even (P=1)',
    flowchart: 'Start\n↓\nCheck P flag\n↓\nIf P=1: Jump to address\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Conditional jump'
    ],
    examples: ['Before: P=1, PC=2050H', 'After:  PC=Label address']
  },

  'JPO_LABEL': {
    opcode: 'E2',
    description: 'Jump if parity odd (P=0)',
    flowchart: 'Start\n↓\nCheck P flag\n↓\nIf P=0: Jump to address\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Conditional jump'
    ],
    examples: ['Before: P=0, PC=2050H', 'After:  PC=Label address']
  },

  'JZ_LABEL': {
    opcode: 'CA',
    description: 'Jump if zero (Z=1)',
    flowchart: 'Start\n↓\nCheck Z flag\n↓\nIf Z=1: Jump to address\n↓\nElse: Continue\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Conditional jump'
    ],
    examples: ['Before: Z=1, PC=2050H', 'After:  PC=Label address']
  },

  'LDA_ADDRESS': {
    opcode: '3A',
    description: 'Load accumulator direct from memory',
    flowchart: 'Start\n↓\nRead address\n↓\nGet memory content\n↓\nLoad to A\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 13 T-states',
      'Direct addressing'
    ],
    examples: ['Before: Memory[2050H]=55H', 'After:  A=55H']
  },

  'LDAX_B': {
    opcode: '0A',
    description: 'Load accumulator indirect through BC',
    flowchart: 'Start\n↓\nGet address from BC\n↓\nRead memory content\n↓\nLoad to A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 7 T-states',
      'Indirect addressing'
    ],
    examples: ['Before: BC=2050H, Memory[2050H]=55H', 'After:  A=55H']
  },

  'LDAX_D': {
    opcode: '1A',
    description: 'Load accumulator indirect through DE',
    flowchart: 'Start\n↓\nGet address from DE\n↓\nRead memory content\n↓\nLoad to A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 7 T-states',
      'Indirect addressing'
    ],
    examples: ['Before: DE=2050H, Memory[2050H]=55H', 'After:  A=55H']
  },

  'LHLD_ADDRESS': {
    opcode: '2A',
    description: 'Load H-L pair direct from memory',
    flowchart: 'Start\n↓\nRead address\n↓\nGet two bytes\n↓\nLoad to L,H\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 16 T-states',
      'Loads two consecutive bytes'
    ],
    examples: ['Before: Memory[2050H]=55H, [2051H]=33H', 'After:  L=55H, H=33H']
  },

  'LXI_B': {
    opcode: '01',
    description: 'Load immediate data to BC pair',
    flowchart: 'Start\n↓\nRead immediate data\n↓\nLoad to C,B\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Immediate 16-bit load'
    ],
    examples: ['Before: Immediate data=3355H', 'After:  B=33H, C=55H']
  },

  'LXI_D': {
    opcode: '11',
    description: 'Load immediate data to DE pair',
    flowchart: 'Start\n↓\nRead immediate data\n↓\nLoad to E,D\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Immediate 16-bit load'
    ],
    examples: ['Before: Immediate data=3355H', 'After:  D=33H, E=55H']
  },

  'LXI_H': {
    opcode: '21',
    description: 'Load immediate data to HL pair',
    flowchart: 'Start\n↓\nRead immediate data\n↓\nLoad to L,H\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Immediate 16-bit load'
    ],
    examples: ['Before: Immediate data=3355H', 'After:  H=33H, L=55H']
  },

  'LXI_SP': {
    opcode: '31',
    description: 'Load immediate data to Stack Pointer',
    flowchart: 'Start\n↓\nRead immediate data\n↓\nLoad to SP\n↓\nEnd',
    keyPoints: [
      'Three byte instruction',
      'No flags affected',
      'Takes 10 T-states',
      'Immediate 16-bit load'
    ],
    examples: ['Before: Immediate data=3355H', 'After:  SP=3355H']
  },

  'MOV_A_A': {
    opcode: '7F',
    description: 'Move content of A to A (No operation)',
    flowchart: 'Start\n↓\nRead A\n↓\nStore in A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Effectively no operation'
    ],
    examples: ['Before: A=55H', 'After:  A=55H']
  },

  'MOV_A_B': {
    opcode: '78',
    description: 'Move content of B to A',
    flowchart: 'Start\n↓\nRead B\n↓\nStore in A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: B=55H', 'After:  A=55H']
  },

  'MOV_A_C': {
    opcode: '79',
    description: 'Move content of C to A',
    flowchart: 'Start\n↓\nRead C\n↓\nStore in A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: C=55H', 'After:  A=55H']
  },
  'MOV_A_D': {
    opcode: '7A',
    description: 'Move content of register D to A',
    flowchart: 'Start\n↓\nRead D register\n↓\nStore in A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: D=55H', 'After:  A=55H']
  },

  'MOV_A_E': {
    opcode: '7B',
    description: 'Move content of register E to A',
    flowchart: 'Start\n↓\nRead E register\n↓\nStore in A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: E=55H', 'After:  A=55H']
  },

  'MOV_A_H': {
    opcode: '7C',
    description: 'Move content of register H to A',
    flowchart: 'Start\n↓\nRead H register\n↓\nStore in A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: H=55H', 'After:  A=55H']
  },

  'MOV_A_L': {
    opcode: '7D',
    description: 'Move content of register L to A',
    flowchart: 'Start\n↓\nRead L register\n↓\nStore in A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: L=55H', 'After:  A=55H']
  },

  'MOV_A_M': {
    opcode: '7E',
    description: 'Move content of memory (addressed by H-L) to A',
    flowchart: 'Start\n↓\nGet address from H-L\n↓\nRead memory\n↓\nStore in A\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 7 T-states',
      'Memory to register move'
    ],
    examples: ['Before: M=55H', 'After:  A=55H']
  },

  'MOV_B_A': {
    opcode: '47',
    description: 'Move content of A to register B',
    flowchart: 'Start\n↓\nRead A register\n↓\nStore in B\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: A=55H', 'After:  B=55H']
  },

  'MOV_B_B': {
    opcode: '40',
    description: 'Move content of B to B (No operation)',
    flowchart: 'Start\n↓\nRead B register\n↓\nStore in B\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Effectively no operation'
    ],
    examples: ['Before: B=55H', 'After:  B=55H']
  },

  'MOV_B_C': {
    opcode: '41',
    description: 'Move content of register C to B',
    flowchart: 'Start\n↓\nRead C register\n↓\nStore in B\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: C=55H', 'After:  B=55H']
  },

  'MOV_B_D': {
    opcode: '42',
    description: 'Move content of register D to B',
    flowchart: 'Start\n↓\nRead D register\n↓\nStore in B\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: D=55H', 'After:  B=55H']
  },

  'MOV_B_E': {
    opcode: '43',
    description: 'Move content of register E to B',
    flowchart: 'Start\n↓\nRead E register\n↓\nStore in B\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: E=55H', 'After:  B=55H']
  },

  'MOV_B_H': {
    opcode: '44',
    description: 'Move content of register H to B',
    flowchart: 'Start\n↓\nRead H register\n↓\nStore in B\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: H=55H', 'After:  B=55H']
  },

  'MOV_B_L': {
    opcode: '45',
    description: 'Move content of register L to B',
    flowchart: 'Start\n↓\nRead L register\n↓\nStore in B\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: L=55H', 'After:  B=55H']
  },

  'MOV_B_M': {
    opcode: '46',
    description: 'Move content of memory (addressed by H-L) to B',
    flowchart: 'Start\n↓\nGet address from H-L\n↓\nRead memory\n↓\nStore in B\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 7 T-states',
      'Memory to register move'
    ],
    examples: ['Before: M=55H', 'After:  B=55H']
  },

  'MOV_C_A': {
    opcode: '4F',
    description: 'Move content of A to register C',
    flowchart: 'Start\n↓\nRead A register\n↓\nStore in C\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: A=55H', 'After:  C=55H']
  },

  'MOV_C_B': {
    opcode: '48',
    description: 'Move content of register B to C',
    flowchart: 'Start\n↓\nRead B register\n↓\nStore in C\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: B=55H', 'After:  C=55H']
  },

  'MOV_C_C': {
    opcode: '49',
    description: 'Move content of C to C (No operation)',
    flowchart: 'Start\n↓\nRead C register\n↓\nStore in C\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Effectively no operation'
    ],
    examples: ['Before: C=55H', 'After:  C=55H']
  },

  'MOV_C_D': {
    opcode: '4A',
    description: 'Move content of register D to C',
    flowchart: 'Start\n↓\nRead D register\n↓\nStore in C\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: D=55H', 'After:  C=55H']
  },

  'MOV_C_E': {
    opcode: '4B',
    description: 'Move content of register E to C',
    flowchart: 'Start\n↓\nRead E register\n↓\nStore in C\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: E=55H', 'After:  C=55H']
  },

  'MOV_C_H': {
    opcode: '4C',
    description: 'Move content of register H to C',
    flowchart: 'Start\n↓\nRead H register\n↓\nStore in C\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: H=55H', 'After:  C=55H']
  },

  'MOV_C_L': {
    opcode: '4D',
    description: 'Move content of register L to C',
    flowchart: 'Start\n↓\nRead L register\n↓\nStore in C\n↓\nEnd',
    keyPoints: [
      'Single byte instruction',
      'No flags affected',
      'Takes 4 T-states',
      'Register to register move'
    ],
    examples: ['Before: L=55H', 'After:  C=55H']
  },
  "MOV C, M": {
    opcode: "4E",
    description: "Move the contents of memory location pointed by HL pair to register C.",
    flowchart: "Start\n↓\nRead memory location pointed by HL\n↓\nStore in C\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Memory to register transfer"
    ]
  },
  "MOV D, A": {
    opcode: "57",
    description: "Move the contents of accumulator (A) to register D.",
    flowchart: "Start\n↓\nRead A register\n↓\nStore in D\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV D, B": {
    opcode: "50",
    description: "Move the contents of register B to register D.",
    flowchart: "Start\n↓\nRead B register\n↓\nStore in D\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV D, C": {
    opcode: "51",
    description: "Move the contents of register C to register D.",
    flowchart: "Start\n↓\nRead C register\n↓\nStore in D\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV D, D": {
    opcode: "52",
    description: "Move the contents of register D to itself (no operation).",
    flowchart: "Start\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "No operation"
    ]
  },
  "MOV D, E": {
    opcode: "53",
    description: "Move the contents of register E to register D.",
    flowchart: "Start\n↓\nRead E register\n↓\nStore in D\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV D, H": {
    opcode: "54",
    description: "Move the contents of register H to register D.",
    flowchart: "Start\n↓\nRead H register\n↓\nStore in D\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV D, L": {
    opcode: "55",
    description: "Move the contents of register L to register D.",
    flowchart: "Start\n↓\nRead L register\n↓\nStore in D\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV D, M": {
    opcode: "56",
    description: "Move the contents of memory location pointed by HL pair to register D.",
    flowchart: "Start\n↓\nRead memory location pointed by HL\n↓\nStore in D\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Memory to register transfer"
    ]
  },
  "MOV E, A": {
    opcode: "5F",
    description: "Move the contents of accumulator (A) to register E.",
    flowchart: "Start\n↓\nRead A register\n↓\nStore in E\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV E, B": {
    opcode: "58",
    description: "Move the contents of register B to register E.",
    flowchart: "Start\n↓\nRead B register\n↓\nStore in E\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV E, C": {
    opcode: "59",
    description: "Move the contents of register C to register E.",
    flowchart: "Start\n↓\nRead C register\n↓\nStore in E\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV E, D": {
    opcode: "5A",
    description: "Move the contents of register D to register E.",
    flowchart: "Start\n↓\nRead D register\n↓\nStore in E\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV E, E": {
    opcode: "5B",
    description: "Move the contents of register E to itself (no operation).",
    flowchart: "Start\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "No operation"
    ]
  },
  "MOV E, H": {
    opcode: "5C",
    description: "Move the contents of register H to register E.",
    flowchart: "Start\n↓\nRead H register\n↓\nStore in E\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV E, L": {
    opcode: "5D",
    description: "Move the contents of register L to register E.",
    flowchart: "Start\n↓\nRead L register\n↓\nStore in E\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV E, M": {
    opcode: "5E",
    description: "Move the contents of memory location pointed by HL pair to register E.",
    flowchart: "Start\n↓\nRead memory location pointed by HL\n↓\nStore in E\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Memory to register transfer"
    ]
  },
  "MOV H, A": {
    opcode: "67",
    description: "Move the contents of accumulator (A) to register H.",
    flowchart: "Start\n↓\nRead A register\n↓\nStore in H\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV H, B": {
    opcode: "60",
    description: "Move the contents of register B to register H.",
    flowchart: "Start\n↓\nRead B register\n↓\nStore in H\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV H, C": {
    opcode: "61",
    description: "Move the contents of register C to register H.",
    flowchart: "Start\n↓\nRead C register\n↓\nStore in H\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV H, D": {
    opcode: "62",
    description: "Move the contents of register D to register H.",
    flowchart: "Start\n↓\nRead D register\n↓\nStore in H\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV H, E": {
    opcode: "63",
    description: "Move the contents of register E to register H.",
    flowchart: "Start\n↓\nRead E register\n↓\nStore in H\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV H, H": {
    opcode: "64",
    description: "Move the contents of register H to itself (no operation).",
    flowchart: "Start\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "No operation"
    ]
  },
  "MOV H, L": {
    opcode: "65",
    description: "Move the contents of register L to register H.",
    flowchart: "Start\n↓\nRead L register\n↓\nStore in H\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV H, M": {
    opcode: "66",
    description: "Move the contents of memory location pointed by HL pair to register H.",
    flowchart: "Start\n↓\nRead memory location pointed by HL\n↓\nStore in H\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Memory to register transfer"
    ]
  },
  "MOV L, A": {
    opcode: "6F",
    description: "Move the contents of accumulator (A) to register L.",
    flowchart: "Start\n↓\nRead A register\n↓\nStore in L\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV L, B": {
    opcode: "68",
    description: "Move the contents of register B to register L.",
    flowchart: "Start\n↓\nRead B register\n↓\nStore in L\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV L, C": {
    opcode: "69",
    description: "Move the contents of register C to register L.",
    flowchart: "Start\n↓\nRead C register\n↓\nStore in L\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV L, D": {
    opcode: "6A",
    description: "Move the contents of register D to register L.",
    flowchart: "Start\n↓\nRead D register\n↓\nStore in L\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV L, E": {
    opcode: "6B",
    description: "Move the contents of register E to register L.",
    flowchart: "Start\n↓\nRead E register\n↓\nStore in L\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV L, H": {
    opcode: "6C",
    description: "Move the contents of register H to register L.",
    flowchart: "Start\n↓\nRead H register\n↓\nStore in L\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register to register transfer"
    ]
  },
  "MOV L, L": {
    opcode: "6D",
    description: "Move the contents of register L to itself (no operation).",
    flowchart: "Start\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "No operation"
    ]
  },
  "MOV L, M": {
    opcode: "6E",
    description: "Move the contents of memory location pointed by HL pair to register L.",
    flowchart: "Start\n↓\nRead memory location pointed by HL\n↓\nStore in L\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Memory to register transfer"
    ]
  },
  "MOV M, A": {
    opcode: "77",
    description: "Move the contents of accumulator (A) to memory location pointed by HL pair.",
    flowchart: "Start\n↓\nRead A register\n↓\nWrite to memory location pointed by HL\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Register to memory transfer"
    ]
  },
  "MOV M, B": {
    opcode: "70",
    description: "Move the contents of register B to memory location pointed by HL pair.",
    flowchart: "Start\n↓\nRead B register\n↓\nWrite to memory location pointed by HL\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Register to memory transfer"
    ]
  },
  "MOV M, C": {
    opcode: "71",
    description: "Move the contents of register C to memory location pointed by HL pair.",
    flowchart: "Start\n↓\nRead C register\n↓\nWrite to memory location pointed by HL\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Register to memory transfer"
    ]
  },
  "MOV M, D": {
    opcode: "72",
    description: "Move the contents of register D to memory location pointed by HL pair.",
    flowchart: "Start\n↓\nRead D register\n↓\nWrite to memory location pointed by HL\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Register to memory transfer"
    ]
  },
  "MOV M, E": {
    opcode: "73",
    description: "Move the contents of register E to memory location pointed by HL pair.",
    flowchart: "Start\n↓\nRead E register\n↓\nWrite to memory location pointed by HL\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Register to memory transfer"
    ]
  },
  "MOV M, H": {
    opcode: "74",
    description: "Move the contents of register H to memory location pointed by HL pair.",
    flowchart: "Start\n↓\nRead H register\n↓\nWrite to memory location pointed by HL\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Register to memory transfer"
    ]
  },
  "MOV M, L": {
    opcode: "75",
    description: "Move the contents of register L to memory location pointed by HL pair.",
    flowchart: "Start\n↓\nRead L register\n↓\nWrite to memory location pointed by HL\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Register to memory transfer"
    ]
  },
  "MVI A, Data": {
    opcode: "3E",
    description: "Move Immediate data to accumulator (A).",
    flowchart: "Start\n↓\nRead immediate data\n↓\nStore in A\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Immediate data to register transfer"
    ]
  },
  "MVI B, Data": {
    opcode: "06",
    description: "Move Immediate data to register B.",
    flowchart: "Start\n↓\nRead immediate data\n↓\nStore in B\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Immediate data to register transfer"
    ]
  },
  "MVI C, Data": {
    opcode: "0E",
    description: "Move Immediate data to register C.",
    flowchart: "Start\n↓\nRead immediate data\n↓\nStore in C\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Immediate data to register transfer"
    ]
  },
  "MVI D, Data": {
    opcode: "16",
    description: "Move Immediate data to register D.",
    flowchart: "Start\n↓\nRead immediate data\n↓\nStore in D\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Immediate data to register transfer"
    ]
  },
  "MVI E, Data": {
    opcode: "1E",
    description: "Move Immediate data to register E.",
    flowchart: "Start\n↓\nRead immediate data\n↓\nStore in E\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Immediate data to register transfer"
    ]
  },
  "MVI H, Data": {
    opcode: "26",
    description: "Move Immediate data to register H.",
    flowchart: "Start\n↓\nRead immediate data\n↓\nStore in H\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Immediate data to register transfer"
    ]
  },
  "MVI L, Data": {
    opcode: "2E",
    description: "Move Immediate data to register L.",
    flowchart: "Start\n↓\nRead immediate data\n↓\nStore in L\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Immediate data to register transfer"
    ]
  },
  "MVI M, Data": {
    opcode: "36",
    description: "Move Immediate data to memory location pointed by HL pair.",
    flowchart: "Start\n↓\nRead immediate data\n↓\nWrite to memory location pointed by HL\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Immediate data to memory transfer"
    ]
  },
  "NOP": {
    opcode: "00",
    description: "No operation (does nothing).",
    flowchart: "Start\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "No operation"
    ]
  },
  "ORA A": {
    opcode: "B7",
    description: "Logical OR between accumulator (A) and itself. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nPerform logical OR (A OR A)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Logical OR operation"
    ]
  },
  "ORA B": {
    opcode: "B0",
    description: "Logical OR between accumulator (A) and register B. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead B register\n↓\nPerform logical OR (A OR B)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Logical OR operation"
    ]
  },
  "ORA C": {
    opcode: "B1",
    description: "Logical OR between accumulator (A) and register C. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead C register\n↓\nPerform logical OR (A OR C)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Logical OR operation"
    ]
  },
  "ORA D": {
    opcode: "B2",
    description: "Logical OR between accumulator (A) and register D. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead D register\n↓\nPerform logical OR (A OR D)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Logical OR operation"
    ]
  },
  "ORA E": {
    opcode: "B3",
    description: "Logical OR between accumulator (A) and register E. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead E register\n↓\nPerform logical OR (A OR E)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Logical OR operation"
    ]
  },
  "ORA H": {
    opcode: "B4",
    description: "Logical OR between accumulator (A) and register H. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead H register\n↓\nPerform logical OR (A OR H)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Logical OR operation"
    ]
  },
  "ORA L": {
    opcode: "B5",
    description: "Logical OR between accumulator (A) and register L. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead L register\n↓\nPerform logical OR (A OR L)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Logical OR operation"
    ]
  },
  "ORA M": {
    opcode: "B6",
    description: "Logical OR between accumulator (A) and the contents of memory location pointed by HL pair. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead memory location pointed by HL\n↓\nPerform logical OR (A OR memory)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 7 T-states",
      "Logical OR operation"
    ]
  },
  "ORI Data": {
    opcode: "F6",
    description: "Logical OR between accumulator (A) and immediate data. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead immediate data\n↓\nPerform logical OR (A OR immediate data)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 7 T-states",
      "Logical OR operation"
    ]
  },
  "OUT Port-Address": {
    opcode: "D3",
    description: "Output the contents of accumulator (A) to the specified port address.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead port address\n↓\nOutput A to the port\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Does not affect flags",
      "Takes 10 T-states",
      "Output operation"
    ]
  },
  "PCHL": {
    opcode: "E9",
    description: "Load the contents of HL pair into the program counter (PC).",
    flowchart: "Start\n↓\nRead H register\n↓\nRead L register\n↓\nLoad HL into PC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 6 T-states",
      "Jump operation"
    ]
  },
  "POP B": {
    opcode: "C1",
    description: "Pop the top two bytes from the stack and load them into registers B and C.",
    flowchart: "Start\n↓\nPop top byte from stack and store in C\n↓\nPop top byte from stack and store in B\n↓\nUpdate stack pointer (SP)\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 10 T-states",
      "Stack operation"
    ]
  },
  "POP D": {
    opcode: "D1",
    description: "Pop the top two bytes from the stack and load them into registers D and E.",
    flowchart: "Start\n↓\nPop top byte from stack and store in E\n↓\nPop top byte from stack and store in D\n↓\nUpdate stack pointer (SP)\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 10 T-states",
      "Stack operation"
    ]
  },
  "POP H": {
    opcode: "E1",
    description: "Pop the top two bytes from the stack and load them into registers H and L.",
    flowchart: "Start\n↓\nPop top byte from stack and store in L\n↓\nPop top byte from stack and store in H\n↓\nUpdate stack pointer (SP)\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 10 T-states",
      "Stack operation"
    ]
  },
  "POP PSW": {
    opcode: "F1",
    description: "Pop the top two bytes from the stack and load them into the accumulator (A) and the flags register (PSW).",
    flowchart: "Start\n↓\nPop top byte from stack and store in flags\n↓\nPop top byte from stack and store in A\n↓\nUpdate stack pointer (SP)\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects all flags",
      "Takes 10 T-states",
      "Stack operation"
    ]
  },
  "PUSH B": {
    opcode: "C5",
    description: "Push the contents of registers B and C onto the stack.",
    flowchart: "Start\n↓\nPush B onto the stack\n↓\nPush C onto the stack\n↓\nUpdate stack pointer (SP)\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Stack operation"
    ]
  },
  "PUSH D": {
    opcode: "D5",
    description: "Push the contents of registers D and E onto the stack.",
    flowchart: "Start\n↓\nPush D onto the stack\n↓\nPush E onto the stack\n↓\nUpdate stack pointer (SP)\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Stack operation"
    ]
  },
  "PUSH H": {
    opcode: "E5",
    description: "Push the contents of registers H and L onto the stack.",
    flowchart: "Start\n↓\nPush H onto the stack\n↓\nPush L onto the stack\n↓\nUpdate stack pointer (SP)\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Stack operation"
    ]
  },
  "PUSH PSW": {
    opcode: "F5",
    description: "Push the contents of the accumulator (A) and the flags register (PSW) onto the stack.",
    flowchart: "Start\n↓\nPush A onto the stack\n↓\nPush flags onto the stack\n↓\nUpdate stack pointer (SP)\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Stack operation"
    ]
  },
  "RAL": {
    opcode: "17",
    description: "Rotate accumulator (A) left through carry flag.",
    flowchart: "Start\n↓\nRotate A left through carry\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Rotate operation"
    ]
  },
  "RAR": {
    opcode: "1F",
    description: "Rotate accumulator (A) right through carry flag.",
    flowchart: "Start\n↓\nRotate A right through carry\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Rotate operation"
    ]
  },

  "RC": {
    opcode: "D8",
    description: "Return if carry flag is set.",
    flowchart: "Start\n↓\nCheck if carry flag is set\n↓\nIf set: Pop top two bytes from stack and load into PC\n↓\nElse: Continue execution\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states (if condition met), 4 T-states (if condition not met)",
      "Conditional return"
    ]
  },
  "RET": {
    opcode: "C9",
    description: "Return from subroutine.",
    flowchart: "Start\n↓\nPop top two bytes from stack and load into PC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 10 T-states",
      "Return from subroutine"
    ]
  },
  "RIM": {
    opcode: "20",
    description: "Read interrupt mask.",
    flowchart: "Start\n↓\nRead interrupt mask from status register\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Interrupt related"
    ]
  },
  "RLC": {
    opcode: "07",
    description: "Rotate accumulator (A) left through carry flag.",
    flowchart: "Start\n↓\nRotate A left through carry\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Rotate operation"
    ]
  },
  "RM": {
    opcode: "F8",
    description: "Return if minus flag is set.",
    flowchart: "Start\n↓\nCheck if sign flag (S) is set\n↓\nIf set: Pop top two bytes from stack and load into PC\n↓\nElse: Continue execution\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states (if condition met), 4 T-states (if condition not met)",
      "Conditional return"
    ]
  },
  "RNC": {
    opcode: "D0",
    description: "Return if carry flag is not set.",
    flowchart: "Start\n↓\nCheck if carry flag is not set\n↓\nIf not set: Pop top two bytes from stack and load into PC\n↓\nElse: Continue execution\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states (if condition met), 4 T-states (if condition not met)",
      "Conditional return"
    ]
  },
  "RNZ": {
    opcode: "C0",
    description: "Return if zero flag is not set.",
    flowchart: "Start\n↓\nCheck if zero flag is not set\n↓\nIf not set: Pop top two bytes from stack and load into PC\n↓\nElse: Continue execution\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states (if condition met), 4 T-states (if condition not met)",
      "Conditional return"
    ]
  },
  "RP": {
    opcode: "F0",
    description: "Return if plus flag is set.",
    flowchart: "Start\n↓\nCheck if parity flag (P) is set\n↓\nIf set: Pop top two bytes from stack and load into PC\n↓\nElse: Continue execution\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states (if condition met), 4 T-states (if condition not met)",
      "Conditional return"
    ]
  },
  "RPE": {
    opcode: "E8",
    description: "Return if parity flag is set or zero flag is set.",
    flowchart: "Start\n↓\nCheck if parity flag (P) or zero flag (Z) is set\n↓\nIf set: Pop top two bytes from stack and load into PC\n↓\nElse: Continue execution\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states (if condition met), 4 T-states (if condition not met)",
      "Conditional return"
    ]
  },
  "RPO": {
    opcode: "E0",
    description: "Return if parity flag is not set or zero flag is set.",
    flowchart: "Start\n↓\nCheck if parity flag (P) is not set or zero flag (Z) is set\n↓\nIf set: Pop top two bytes from stack and load into PC\n↓\nElse: Continue execution\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states (if condition met), 4 T-states (if condition not met)",
      "Conditional return"
    ]
  },
  "RRC": {
    opcode: "0F",
    description: "Rotate accumulator (A) right through carry flag.",
    flowchart: "Start\n↓\nRotate A right through carry\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Rotate operation"
    ]
  },
  "RST 0": {
    opcode: "C7",
    description: "Restart interrupt 0. Jump to memory location 0000H.",
    flowchart: "Start\n↓\nLoad 0000H into PC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Restart interrupt"
    ]
  },
  "RST 1": {
    opcode: "CF",
    description: "Restart interrupt 1. Jump to memory location 0008H.",
    flowchart: "Start\n↓\nLoad 0008H into PC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Restart interrupt"
    ]
  },
  "RST 2": {
    opcode: "D7",
    description: "Restart interrupt 2. Jump to memory location 0010H.",
    flowchart: "Start\n↓\nLoad 0010H into PC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Restart interrupt"
    ]
  },
  "RST 3": {
    opcode: "DF",
    description: "Restart interrupt 3. Jump to memory location 0018H.",
    flowchart: "Start\n↓\nLoad 0018H into PC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Restart interrupt"
    ]
  },
  "RST 4": {
    opcode: "E7",
    description: "Restart interrupt 4. Jump to memory location 0020H.",
    flowchart: "Start\n↓\nLoad 0020H into PC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Restart interrupt"
    ]
  },
  "RST 5": {
    opcode: "EF",
    description: "Restart interrupt 5. Jump to memory location 0028H.",
    flowchart: "Start\n↓\nLoad 0028H into PC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Restart interrupt"
    ]
  },
  "RST 6": {
    opcode: "F7",
    description: "Restart interrupt 6. Jump to memory location 0030H.",
    flowchart: "Start\n↓\nLoad 0030H into PC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Restart interrupt"
    ]
  },
  "RST 7": {
    opcode: "FF",
    description: "Restart interrupt 7. Jump to memory location 0038H.",
    flowchart: "Start\n↓\nLoad 0038H into PC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states",
      "Restart interrupt"
    ]
  },
  "RZ": {
    opcode: "C8",
    description: "Return if zero flag is set.",
    flowchart: "Start\n↓\nCheck if zero flag is set\n↓\nIf set: Pop top two bytes from stack and load into PC\n↓\nElse: Continue execution\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 11 T-states (if condition met), 4 T-states (if condition not met)",
      "Conditional return"
    ]
  },
  "SBB A": {
    opcode: "9F",
    description: "Subtract accumulator (A) and carry flag from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nSubtract A and carry flag from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction with borrow"
    ],
    example: "Before: A=55H, CY=1\nAfter: A=AAH, CY=1" 
  },
  "SBB B": {
    opcode: "98",
    description: "Subtract register B and carry flag from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead B register\n↓\nSubtract B and carry flag from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction with borrow"
    ],
    example: "Before: A=55H, B=30H, CY=1\nAfter: A=24H, CY=0" 
  },
  "SBB C": {
    opcode: "99",
    description: "Subtract register C and carry flag from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead C register\n↓\nSubtract C and carry flag from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction with borrow"
    ],
    example: "Before: A=55H, C=30H, CY=1\nAfter: A=24H, CY=0" 
  },
  "SBB D": {
    opcode: "9A",
    description: "Subtract register D and carry flag from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead D register\n↓\nSubtract D and carry flag from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction with borrow"
    ],
    example: "Before: A=55H, D=30H, CY=1\nAfter: A=24H, CY=0" 
  },
  "SBB E": {
    opcode: "9B",
    description: "Subtract register E and carry flag from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead E register\n↓\nSubtract E and carry flag from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction with borrow"
    ],
    example: "Before: A=55H, E=30H, CY=1\nAfter: A=24H, CY=0" 
  },
  "SBB H": {
    opcode: "9C",
    description: "Subtract register H and carry flag from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead H register\n↓\nSubtract H and carry flag from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction with borrow"
    ],
    example: "Before: A=55H, H=30H, CY=1\nAfter: A=24H, CY=0" 
  },
  "SBB L": {
    opcode: "9D",
    description: "Subtract register L and carry flag from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead L register\n↓\nSubtract L and carry flag from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction with borrow"
    ],
    example: "Before: A=55H, L=30H, CY=1\nAfter: A=24H, CY=0" 
  },
  "SBB M": {
    opcode: "9E",
    description: "Subtract the contents of memory location pointed by HL pair and carry flag from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead memory location pointed by HL\n↓\nSubtract memory and carry flag from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 7 T-states",
      "Subtraction with borrow"
    ],
    example: "Before: A=55H, Memory[HL]=30H, CY=1\nAfter: A=24H, CY=0" 
  },
  "SBI Data": {
    opcode: "DE",
    description: "Subtract immediate data and carry flag from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead immediate data\n↓\nSubtract immediate data and carry flag from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 7 T-states",
      "Subtraction with borrow"
    ],
    example: "Before: A=55H, Data=30H, CY=1\nAfter: A=24H, CY=0"
  },
  "SHLD Address": {
    opcode: "22",
    description: "Store the contents of registers H and L into the specified memory address.",
    flowchart: "Start\n↓\nRead H register\n↓\nRead L register\n↓\nWrite H to memory address\n↓\nWrite L to memory address+1\n↓\nEnd",
    keyPoints: [
      "Three-byte instruction",
      "Does not affect flags",
      "Takes 16 T-states",
      "Register to memory transfer"
    ]
  },
  "SIM": {
    opcode: "30",
    description: "Set interrupt mask.",
    flowchart: "Start\n↓\nSet interrupt mask in status register\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Interrupt related"
    ]
  },
  "SPHL": {
    opcode: "F9",
    description: "Load the contents of registers H and L into the stack pointer (SP).",
    flowchart: "Start\n↓\nRead H register\n↓\nRead L register\n↓\nLoad HL into SP\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 5 T-states",
      "Stack pointer load"
    ]
  },
  "STA Address": {
    opcode: "32",
    description: "Store the contents of accumulator (A) into the specified memory address.",
    flowchart: "Start\n↓\nRead A register\n↓\nWrite A to memory address\n↓\nEnd",
    keyPoints: [
      "Three-byte instruction",
      "Does not affect flags",
      "Takes 13 T-states",
      "Register to memory transfer"
    ]
  },
  "STAX B": {
    opcode: "02",
    description: "Store the contents of accumulator (A) into the memory location pointed by the BC register pair.",
    flowchart: "Start\n↓\nRead A register\n↓\nWrite A to memory location pointed by BC\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Register to memory transfer"
    ]
  },
  "STAX D": {
    opcode: "12",
    description: "Store the contents of accumulator (A) into the memory location pointed by the DE register pair.",
    flowchart: "Start\n↓\nRead A register\n↓\nWrite A to memory location pointed by DE\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 7 T-states",
      "Register to memory transfer"
    ]
  },
  "STC": {
    opcode: "37",
    description: "Set the carry flag.",
    flowchart: "Start\n↓\nSet carry flag (CY)\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects CY flag",
      "Takes 4 T-states",
      "Flag manipulation"
    ]
  },
  "SUB A": {
    opcode: "97",
    description: "Subtract accumulator (A) from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nSubtract A from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction"
    ],
    example: "Before: A=55H\nAfter: A=00H, CY=1"
  },
  "SUB B": {
    opcode: "90",
    description: "Subtract register B from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead B register\n↓\nSubtract B from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction"
    ],
    example: "Before: A=55H, B=30H\nAfter: A=25H, CY=0"
  },
  "SUB C": {
    opcode: "91",
    description: "Subtract register C from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead C register\n↓\nSubtract C from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction"
    ],
    example: "Before: A=55H, C=30H\nAfter: A=25H, CY=0"
  },
  "SUB D": {
    opcode: "92",
    description: "Subtract register D from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead D register\n↓\nSubtract D from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction"
    ],
    example: "Before: A=55H, D=30H\nAfter: A=25H, CY=0"
  },
  "SUB E": {
    opcode: "93",
    description: "Subtract register E from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead E register\n↓\nSubtract E from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction"
    ],
    example: "Before: A=55H, E=30H\nAfter: A=25H, CY=0"
  },
  "SUB H": {
    opcode: "94",
    description: "Subtract register H from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead H register\n↓\nSubtract H from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction"
    ],
    example: "Before: A=55H, H=30H\nAfter: A=25H, CY=0"
  },
  "SUB L": {
    opcode: "95",
    description: "Subtract register L from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead L register\n↓\nSubtract L from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Subtraction"
    ],
    example: "Before: A=55H, L=30H\nAfter: A=25H, CY=0"
  },
  "SUB M": {
    opcode: "96",
    description: "Subtract the contents of memory location pointed by HL pair from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead memory location pointed by HL\n↓\nSubtract memory from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 7 T-states",
      "Subtraction"
    ],
    example: "Before: A=55H, Memory[HL]=30H\nAfter: A=25H, CY=0"
  },
  "SUI Data": {
    opcode: "D6",
    description: "Subtract immediate data from accumulator (A). Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead immediate data\n↓\nSubtract immediate data from A\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 7 T-states",
      "Subtraction"
    ],
    example: "Before: A=55H, Data=30H\nAfter: A=25H, CY=0"
  },
  "XCHG": {
    opcode: "EB",
    description: "Exchange the contents of register pairs H and L with registers D and E.",
    flowchart: "Start\n↓\nExchange H with D\n↓\nExchange L with E\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 4 T-states",
      "Register exchange"
    ]
  },
  "XRA A": {
    opcode: "AF",
    description: "Exclusive OR between accumulator (A) and itself. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nPerform exclusive OR (A XOR A)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Exclusive OR operation"
    ],
    example: "Before: A=55H\nAfter: A=00H, CY=0"
  },
  "XRA B": {
    opcode: "A8",
    description: "Exclusive OR between accumulator (A) and register B. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead B register\n↓\nPerform exclusive OR (A XOR B)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Exclusive OR operation"
    ],
    example: "Before: A=55H, B=30H\nAfter: A=25H, CY=0"
  },
  "XRA C": {
    opcode: "A9",
    description: "Exclusive OR between accumulator (A) and register C. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead C register\n↓\nPerform exclusive OR (A XOR C)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Exclusive OR operation"
    ],
    example: "Before: A=55H, C=30H\nAfter: A=25H, CY=0"
  },
  "XRA D": {
    opcode: "AA",
    description: "Exclusive OR between accumulator (A) and register D. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead D register\n↓\nPerform exclusive OR (A XOR D)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Exclusive OR operation"
    ],
    example: "Before: A=55H, D=30H\nAfter: A=25H, CY=0"
  },
  "XRA E": {
    opcode: "AB",
    description: "Exclusive OR between accumulator (A) and register E. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead E register\n↓\nPerform exclusive OR (A XOR E)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Exclusive OR operation"
    ],
    example: "Before: A=55H, E=30H\nAfter: A=25H, CY=0"
  },
  "XRA H": {
    opcode: "AC",
    description: "Exclusive OR between accumulator (A) and register H. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead H register\n↓\nPerform exclusive OR (A XOR H)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Exclusive OR operation"
    ],
    example: "Before: A=55H, H=30H\nAfter: A=25H, CY=0"
  },
  "XRA L": {
    opcode: "AD",
    description: "Exclusive OR between accumulator (A) and register L. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead L register\n↓\nPerform exclusive OR (A XOR L)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 4 T-states",
      "Exclusive OR operation"
    ],
    example: "Before: A=55H, L=30H\nAfter: A=25H, CY=0"
  },
  "XRA M": {
    opcode: "AE",
    description: "Exclusive OR between accumulator (A) and the contents of memory location pointed by HL pair. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead memory location pointed by HL\n↓\nPerform exclusive OR (A XOR memory)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 7 T-states",
      "Exclusive OR operation"
    ],
    example: "Before: A=55H, Memory[HL]=30H\nAfter: A=25H, CY=0"
  },
  "XRI Data": {
    opcode: "EE",
    description: "Exclusive OR between accumulator (A) and immediate data. Result stored in A.",
    flowchart: "Start\n↓\nRead A register\n↓\nRead immediate data\n↓\nPerform exclusive OR (A XOR immediate data)\n↓\nStore result in A\n↓\nSet flags\n↓\nEnd",
    keyPoints: [
      "Two-byte instruction",
      "Affects S, Z, P, AC, CY flags",
      "Takes 7 T-states",
      "Exclusive OR operation"
    ],
    example: "Before: A=55H, Data=30H\nAfter: A=25H, CY=0"
  },
  "XTHL": {
    opcode: "E3",
    description: "Exchange the contents of registers H and L with the top two bytes of the stack.",
    flowchart: "Start\n↓\nPop top byte from stack and store in H\n↓\nPop top byte from stack and store in L\n↓\nPush H onto the stack\n↓\nPush L onto the stack\n↓\nEnd",
    keyPoints: [
      "Single byte instruction",
      "Does not affect flags",
      "Takes 18 T-states",
      "Stack and register exchange"
    ]
  },
}


const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
    });

    
// DOM Elements
const searchInput = document.getElementById('search-input');
const instructionBody = document.getElementById('instruction-body');
const modal = document.getElementById('instruction-modal');
const modalDetails = document.getElementById('instruction-details');
const closeModal = document.getElementById('close-modal');

// Pagination variables
const ITEMS_PER_PAGE = 15;
let currentPage = 1;
let filteredInstructions = [];

// Populate table based on search
function updateTable() {
  const search = searchInput.value.toLowerCase();
  filteredInstructions = Object.entries(instructionDatabase).filter(([mnemonic]) =>
    mnemonic.toLowerCase().includes(search)
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedInstructions = filteredInstructions.slice(startIndex, endIndex);

  // Clear existing rows
  instructionBody.innerHTML = '';

  // Add rows for current page
  paginatedInstructions.forEach(([mnemonic, details]) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${mnemonic}</td>
      <td>${details.opcode}</td>
    `;
    row.addEventListener('click', () => showDetails(mnemonic));
    instructionBody.appendChild(row);
  });

  // Update load more button
  updateLoadMoreButton();
}

// Create and update load more button
function updateLoadMoreButton() {
  let loadMoreContainer = document.querySelector('.load-more-container');
  if (!loadMoreContainer) {
    loadMoreContainer = document.createElement('div');
    loadMoreContainer.className = 'load-more-container';
    document.querySelector('.table-wrapper').after(loadMoreContainer);
  }

  const remainingItems = filteredInstructions.length - (currentPage * ITEMS_PER_PAGE);
  
  if (remainingItems > 0) {
    loadMoreContainer.innerHTML = `
      <button class="load-more-btn">
        Show More (${remainingItems} remaining)
      </button>
    `;
    
    const loadMoreBtn = loadMoreContainer.querySelector('.load-more-btn');
    loadMoreBtn.addEventListener('click', () => {
      currentPage++;
      updateTable();
    });
  } else {
    loadMoreContainer.innerHTML = '';
  }
}

// Show instruction details
function showDetails(mnemonic) {
  const instruction = instructionDatabase[mnemonic];
  const details = document.getElementById('instruction-details');

  details.innerHTML = `
    <h2>${mnemonic}</h2>
    <p><strong>Opcode:</strong> ${instruction.opcode}</p>
    <p><strong>Description:</strong> ${instruction.description}</p>
    
    <div class="instruction-flowchart">
      <h3>Flowchart</h3>
      <pre>${instruction.flowchart}</pre>
    </div>
    
    <div class="instruction-keypoints">
      <h3>Key Points</h3>
      <ul>
        ${instruction.keyPoints.map(point => `<li>${point}</li>`).join('')}
      </ul>
    </div>
    
    ${instruction.examples ? `
      <div class="instruction-examples">
        <h3>Examples</h3>
        ${instruction.examples.map(example => `<code>${example}</code>`).join('')}
      </div>
    ` : ''}
  `;

  modal.classList.remove('hidden');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateTable();

  // Search input event listener
  searchInput.addEventListener('input', () => {
    currentPage = 1;
    updateTable();
  });

  // Close modal event listener
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
});
 

javascript
// Theme Toggle Function
const initTheme = () => {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark'; 

  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggle.innerHTML = currentTheme === 'dark' ? 
    '<i class="fas fa-sun"></i>' : 
    '<i class="fas fa-moon"></i>';

  themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });
};

initTheme();