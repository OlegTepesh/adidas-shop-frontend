import React from 'react';
import Button from './Button';
import { FilterName, Sizes } from './styled';

export default () => (
  <Sizes>
    <FilterName>Size</FilterName>
    <Button>36</Button>
    <Button>37</Button>
    <Button>38</Button>
    <Button>39</Button>
    <Button>40</Button>
    <Button isActive>41</Button>
    <Button>42</Button>
  </Sizes>
);
