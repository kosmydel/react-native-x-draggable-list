import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  type OnDragEndResponder,
} from 'react-beautiful-dnd';
import { View } from 'react-native';
import type { Props, Item } from './types';

// a little function to help us with reordering the result
type ReoderParams = {
  list: Item[];
  startIndex: number;
  endIndex: number;
};

const reorder = ({ list, startIndex, endIndex }: ReoderParams) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);

  if (removed !== undefined) {
    result.splice(endIndex, 0, removed);
  }

  return result;
};

export const MyDraggableList = ({ items, setData, renderItem }: Props) => {
  const onDragEnd: OnDragEndResponder = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder({
      list: items,
      startIndex: result.source.index,
      endIndex: result.destination.index,
    });

    setData(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <View {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {renderItem({
                      item,
                      getIndex: () => 1,
                      isActive: snapshot.isDragging,
                      drag: () => {},
                    })}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </View>
        )}
      </Droppable>
    </DragDropContext>
  );
};
